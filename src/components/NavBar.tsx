import { ChatBubbleOutline, Person2Outlined } from '@mui/icons-material'
import { ReactComponent as DiceIcon } from '../assets/d20.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SvgIcon } from '@mui/material'

const NavBar: React.FC = () => {
  const navigate = useNavigate()

  const redirectToHomePage = () => {
    navigate('/')
  }

  const redirectToChatPage = () => {
    navigate('/chat')
  }

  const redirectToUserPage = () => {
    navigate('/profile')
  }

  return (
    <div className="navbar">
      <span className="navbar__icons-user" onClick={() => redirectToUserPage()}>
        <Person2Outlined />
      </span>
      <span className="navbar__icons-dice" onClick={() => redirectToHomePage()}>
        <SvgIcon component={DiceIcon} inheritViewBox ></SvgIcon>
      </span>
      <span className="navbar__icons-chat" onClick={() => redirectToChatPage()}>
        <ChatBubbleOutline />
      </span>
    </div>
  )
}

export default NavBar;