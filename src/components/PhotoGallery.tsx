import React, { useCallback, useState } from 'react'
import UserPhoto from '../components/UserPhoto'
import { ReactComponent as UserIcon } from '../assets/icons/user_circle.svg'
import { ReactComponent as WriteIcon } from '../assets/icons/write.svg'
import { ReactComponent as RaceIcon } from '../assets/icons/user_crown.svg'
import { ReactComponent as ClassIcon } from '../assets/icons/witch.svg'
import { ReactComponent as CameraIcon } from '../assets/icons/camera.svg'

import { Box } from '@mui/material'

const PhotoGallery: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
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