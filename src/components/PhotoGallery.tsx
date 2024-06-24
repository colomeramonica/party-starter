import React, { useCallback, useEffect, useState } from 'react'
import {storage} from '../utils/firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { ReactComponent as CameraIcon } from '../assets/icons/camera.svg'

import { Box } from '@mui/material'

const PhotoGallery: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const storageRef  = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error: any) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
            console.log('File available at', downloadURL);
          setImage(downloadURL); 
          });
        }
      );
    }
  };

  return (
    <div className="photo_gallery">
      <Box className="photo_gallery_images_item" height={100} width={100} component="section" sx={{ p: 2, border: '1px solid grey' }}>
        <div className="upload-container">
          <input type="file" id="file-input" onChange={handleImageUpload} hidden />
          <label htmlFor="file-input">
            <CameraIcon className="camera-icon" style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              fill: '#2C363F'
            }} />
          </label>
          {image && <img className="photo_gallery_images_preview" src={image} alt="Preview" style={{ width: '95px', height: '95px', objectFit: 'contain' }} />}
        </div>
      </Box>
    </div>
  );
}

export default PhotoGallery;