import React from 'react'
import NavBar from '../components/NavBar'
import CharacterCard from '../components/CharacterCard'

const HomePage: React.FC = () => {
    return (
        <form>
            <div>
                <NavBar />
                <CharacterCard />
            </div>
        </form>
    )
}

export default HomePage
