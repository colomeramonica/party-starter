import React from "react"
import MollyMauk from '../assets/placeholder/Mollymauk.png'
export const UserPhoto: React.FC = () => {
  return (
    <form>
      <div className="user_photo">
        <img src={MollyMauk} alt="Mollymauk" className="user_photo__frame" />
        <label className="user_photo__name">MollyMauk</label>
      </div>
    </form>
  );
}

export default UserPhoto