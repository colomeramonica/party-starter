import React from 'react'
import UserPhoto from '../components/UserPhoto'
import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { AccountCircle, EmailRounded } from '@mui/icons-material'

const ProfilePage: React.FC = () => {
  const [race, setRace] = React.useState('');

  const handleRaceChange = (race: string) => {
    setRace(race);
  }
  return (
    <form>
      <div className="profile_page__photo-frame">
        <UserPhoto />
      </div>
      <div className="profile_page__info">
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="profile_page__info_input">
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Name" variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="profile_page__info_input">
          <EmailRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            label="Descrição"
            multiline
            rows={2}
            maxRows={4}
          />
        </Box>
        <FormControl className="profile_page__info_input">
          <InputLabel>Raça</InputLabel>
          <Select className="profile_page__info_select">
            <MenuItem value="Artífice">Artífice</MenuItem>
            <MenuItem value="Bárbaro">Bárbaro</MenuItem>
            <MenuItem value="Bardo">Bardo</MenuItem>
            <MenuItem value="Bruxo">Bruxo</MenuItem>
            <MenuItem value="Clérigo">Clérigo</MenuItem>
            <MenuItem value="Druida">Druida</MenuItem>
            <MenuItem value="Feiticeiro">Feiticeiro</MenuItem>
            <MenuItem value="Guardião">Guardião</MenuItem>
            <MenuItem value="Guerreiro">Guerreiro</MenuItem>
            <MenuItem value="Ladino">Ladino</MenuItem>
            <MenuItem value="Mago">Mago</MenuItem>
            <MenuItem value="Monge">Monge</MenuItem>
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
