import React, { ChangeEvent, useCallback, useState } from 'react'
import UserPhoto from '../components/UserPhoto'
import { ReactComponent as UserIcon } from '../assets/icons/user_circle.svg'
import { ReactComponent as WriteIcon } from '../assets/icons/write.svg'
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'
import { ReactComponent as RaceIcon } from '../assets/icons/user_crown.svg'
import { ReactComponent as ClassIcon } from '../assets/icons/witch.svg'
import classes from '../data/DnDClasses';
import races from '../data/DnDRaces';
import {
  Button, TextField, Select, MenuItem, InputLabel, FormControl,
  InputAdornment, Autocomplete
} from '@mui/material'
import NavBar from '../components/NavBar'
import PhotoGallery from '../components/PhotoGallery'

const ProfilePage: React.FC = () => {
  const [state, setState] = useState({
    name: 'Mollymauk',
    description: 'The best character',
    race: 'Tiefling',
    classes: [] as Array<string>
  });

  const handleChange = useCallback((name: string, value: string | string[]) => {
    setState((prevState) => ({
      ...prevState,
      [name]: Array.isArray(value) ? value : value.toString(),
    }));
  }, [setState]);

  return (
    <form>
      <NavBar />
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
          <FormControl fullWidth className="profile_page__section_info_input">
            <InputLabel id="demo-simple-select-label">Race</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.race}
              label="Race"
              onChange={(event) => handleChange('race', event.target.value)}
            >
              {Object.entries(races).map(([raceName, raceData]) => (
                <MenuItem value={raceName}>{raceName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="profile_page__section_info_input">
          <Autocomplete
            multiple
            options={Object.values(classes)}
            getOptionLabel={(option) => option}
            onChange={(event, value) => {
              handleChange('classes', value)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Class"
              />
            )}
          />
        </div>
      </div>
      <div className="profile_page__section_gallery">
        <div className="profile_page__section_title">
          <h3>Photo Gallery</h3>
        </div>
        <div className="profile_page__section_gallery_images">
          <PhotoGallery />
        </div>
      </div>
      <div className="profile_page__actions">
        <Button className="profile_page__actions_button--save" variant="contained" size="small">Salvar</Button>
      </div>
    </form >
  )
}

export default ProfilePage
