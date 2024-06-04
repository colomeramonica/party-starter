import React from "react"
import MollyMauk from '../assets/placeholder/Mollymauk.png'
export const UserPhoto: React.FC = () => {
  return (
    <form>
      <div className="user_photo">
        <img src={MollyMauk} alt="Mollymauk" className="user_photo--frame" />
      </div>
      <label>MollyMauk</label>
    </form>
  );
}

export default UserPhoto