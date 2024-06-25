import React, { useCallback, useEffect, useState } from 'react';
import { storage } from '../utils/firebaseConfig';
import { getDownloadURL, listAll, ref, uploadBytesResumable } from 'firebase/storage';
import { ReactComponent as CameraIcon } from '../assets/icons/camera.svg';
import { Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

type PhotoGalleryProps = {
  onFileUpload: (imageUrls: string[]) => void;
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({onFileUpload}) => {
  const [boxes, setBoxes] = useState<{ id: string; imageUrl: string | null }[]>([{ id: uuidv4(), imageUrl: null }]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, 'images/');
      const imageFiles = await listAll(imagesRef);
      const imageUrls = await Promise.all(
        imageFiles.items.map((item) => getDownloadURL(ref(storage, item.fullPath)))
      );

      if (onFileUpload) {
        onFileUpload(imageUrls)
      }

      const imageBoxes = imageUrls.map((url) => ({
        id: uuidv4(),
        imageUrl: url,
      }));

      setBoxes([...imageBoxes, { id: uuidv4(), imageUrl: null }]);
    };

    fetchImages();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, boxId: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setBoxes((prevBoxes) => {
              const updatedBoxes = prevBoxes.map((box) =>
                box.id === boxId ? { ...box, imageUrl: downloadURL } : box
              );
              return [...updatedBoxes, { id: uuidv4(), imageUrl: null }];
            });
          });
        }
      );
    }
  };

  return (
    <div className="photo_gallery">
      {boxes.map((box, index) => (
        <Box key={box.id} className="photo_gallery_images_item" height={100} width={100} component="section" sx={{ p: 2, border: '1px solid grey' }}>
          <div className="upload-container">
            {!box.imageUrl && (
              <>
                <input type="file" id={`file-input-${index}`} onChange={(e) => handleImageUpload(e, box.id)} hidden />
                <label htmlFor={`file-input-${index}`}>
                  <CameraIcon className="camera-icon" style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    fill: '#2C363F'
                  }} />
                </label>
              </>
            )}
            {box.imageUrl && (
              <img className="photo_gallery_images_preview" src={box.imageUrl} alt="Gallery" style={{ width: '95px', height: '95px', objectFit: 'contain' }} />
            )}
          </div>
        </Box>
      ))}
    </div>
  );
};

export default PhotoGallery;