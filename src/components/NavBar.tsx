import { ReactComponent as DiceIcon } from '../assets/icons/d20.svg'
import { ReactComponent as UserIcon } from '../assets/icons/user_circle.svg'
import { ReactComponent as ChatIcon } from '../assets/icons/chat.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom'

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
        <UserIcon style={{ width: '24px' }} />
      </span>
      <span className="navbar__icons-dice" onClick={() => redirectToHomePage()}>
        <DiceIcon style={{ width: '30px', height: '30px', fill: '#1EA896' }} />
      </span>
      <span className="navbar__icons-chat" onClick={() => redirectToChatPage()}>
        <ChatIcon style={{ width: '24px' }} />
      </span>
    </div>
  )
}

export default NavBar;