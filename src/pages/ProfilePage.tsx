import React, { useCallback, useState } from 'react'
import UserPhoto from '../components/UserPhoto'
import { ReactComponent as UserIcon } from '../assets/icons/user_circle.svg'
import { ReactComponent as WriteIcon } from '../assets/icons/write.svg'
import { ReactComponent as RaceIcon } from '../assets/icons/user_crown.svg'
import { ReactComponent as ClassIcon } from '../assets/icons/witch.svg'
import { ReactComponent as CameraIcon } from '../assets/icons/camera.svg'

import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, InputAdornment, ListItemIcon, ListItemText, SelectChangeEvent } from '@mui/material'

const ProfilePage: React.FC = () => {
  const [state, setState] = useState({
    name: 'Mollymauk',
    description: 'The best character',
    race: 'Tiefling',
    class: 'Blood Hunter'
  });

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


  const handleChange = useCallback((name: string, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, [setState]);

  return (
    <form>
      <div className="profile_page__photo-frame">
        <UserPhoto />
      </div>
      <div className="profile_page__section_info">
        <div className="profile_page__section_title">
          <h3>Caracther Info</h3>
        </div>
        <div className="profile_page__section_info_input">
          <TextField
            id="input-with-icon-textfield"
            label="Name"
            value={state.name}
            onChange={() => handleChange('name', state.name)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserIcon style={{ width: '20px', height: '20px', fill: '#2C363F', marginLeft: '7px' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            color="secondary"
          />
        </div>
        <div className="profile_page__section_info_input">
          <TextField
            id="input-with-icon-textfield"
            label="Description"
            value={state.description}
            onChange={() => handleChange('description', state.description)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WriteIcon style={{ width: '20px', height: '20px', fill: '#2C363F', marginLeft: '7px' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            color="secondary"
          />
        </div>
        <div className="profile_page__section_info_input">
          <Select
            className="profile_page__section_info_input--select"
            size="small"
            id="race-select"
            value={state.race}
            placeholder={state.race}
            onChange={() => handleChange('race', state.race)}
            color="secondary">
          </Select>
        </div>
        <div className="profile_page__section_info_input">
          <Select
            size="small"
            id="class-select"
            value={state.class}
            placeholder={state.class}
            onChange={() => handleChange('class', state.class)}
            color="secondary">
          </Select>
        </div>
      </div>
      <div className="profile_page__section_gallery">
        <div className="profile_page__section_title">
          <h3>Photo Gallery</h3>
        </div>
        <div className="profile_page__section_gallery_images">
          <Box className="profile_page__section_gallery_images_item" height={100} width={100} component="section" sx={{ p: 2, border: '1px solid grey' }}>
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
            </div>
            {image && <img className="profile_page__section_gallery_images_preview" src={image} alt="Preview" style={{ width: '95px', height: '95px', objectFit: 'contain' }} />}
          </Box>
          <Box className="profile_page__section_gallery_images_item" height={100} width={100} component="section" sx={{ p: 2, border: '1px solid grey' }}>
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
            </div>
          </Box>
        </div>
      </div>
      <div className="profile_page__actions">
        <Button className="profile_page__actions_button--save" variant="contained" size="small">Salvar</Button>
      </div>
    </form >
  )
}

export default ProfilePage
