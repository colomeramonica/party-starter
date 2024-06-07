import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/main.sass'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ChatPage from './pages/ChatPage'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
