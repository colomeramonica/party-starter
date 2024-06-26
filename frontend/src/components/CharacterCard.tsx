import React from "react";
import Jester from '../assets/placeholder/Jester.png'
import ActionButton from "./ActionButton";

export const CharacterCard: React.FC = () => {
  return (
    <form className="character_card">
      <div className="character_card__image">
        <img src={Jester} alt=" Character" />
      </div>
      <div className="character_card__actions">
        <ActionButton type="decline" />
        <ActionButton type="accept" />
      </div>
      <div className="character_card__info">
        <h2 className="character_card__info-name">Jester Lavorre</h2>
        <p className="character_card__info-description">
          Jester Lavorre is a tiefling cleric of the Traveler and a member of the Mighty Nein.
          She is played by Laura Bailey.
        </p>
        <div className="character_card__info-attributes">
          <span className="character_card__info-attributes-item">
            Chaotic Neutral
          </span>
          <span className="character_card__info-attributes-item">
            Cleric
          </span>
          <span className="character_card__info-attributes-item">
            Tiefling
          </span>
        </div>
      </div>
    </form>
  );
};

export default CharacterCard;