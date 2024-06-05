import React from 'react'
import UserPhoto from '../components/UserPhoto'
import { ReactComponent as UserIcon } from '../assets/icons/user_circle.svg'
import { ReactComponent as WriteIcon } from '../assets/icons/write.svg'
import { ReactComponent as RaceIcon } from '../assets/icons/user_crown.svg'
import { ReactComponent as ClassIcon } from '../assets/icons/witch.svg'

import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, InputAdornment, ListItemIcon, ListItemText, SelectChangeEvent } from '@mui/material'

const ProfilePage: React.FC = () => {
  const [race, setRace] = React.useState('');
  const [charClass, setCharClass] = React.useState('');

  const handleRaceChange = (event: SelectChangeEvent<string>) => {
    setRace(event.target.value);
  }

  const handleClassChange = (event: SelectChangeEvent<string>) => {
    setCharClass(event.target.value);
  }

  return (
    <form>
      <div className="profile_page__photo-frame">
        <UserPhoto />
      </div>
      <div className="profile_page__info_input">
        <TextField
          id="input-with-icon-textfield"
          label="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <UserIcon style={{ width: '20px', height: '20px', fill: '#2C363F' }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          color="secondary"
        />
      </div>
      <div className="profile_page__info_input">
        <TextField
          id="input-with-icon-textfield"
          label="Description"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WriteIcon style={{ width: '20px', height: '20px', fill: '#2C363F' }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          color="secondary"
        />
      </div>
      <div className="profile_page__info_input">
        <TextField
          id="input-with-icon-textfield"
          label="Race"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RaceIcon style={{ width: '20px', height: '20px', fill: '#2C363F' }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          color="secondary"
        />
      </div>
      <div className="profile_page__info_input" style={{ display: 'flex', flexDirection: 'column' }}>
        <FormControl>
          <InputLabel htmlFor="race-select" style={{ display: 'flex', alignItems: 'center' }}>
            <ClassIcon style={{ width: '20px', height: '20px', fill: '#2C363F' }} />
            Class
          </InputLabel>
          <Select
            style={{ width: '100%' }}
            size="small"
            id="race-select"
            value={charClass}
            placeholder={charClass}
            onChange={handleClassChange}
            color="secondary">
          </Select>
        </FormControl>
      </div>
      <div className="profile_page__actions">
        {/* <Button className="profile_page__actions_button--edit-char" size="small">Editar personagens</Button> */}
        <Button className="profile_page__actions_button--save" variant="contained" size="small">Salvar</Button>
      </div>
    </form >
  )
}

export default ProfilePage
