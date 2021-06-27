import React from 'react';
import '../index.css';

function Card(props) {
  const {name, link, like} = props;
  return (
        <div className="place-card"> 
          <div className="place-card__image" style={{backgroundImage: `url(${link})`}}> 
            <button className="place-card__delete-icon"></button> 
          </div> 
          <div className="place-card__description"> 
            <h3 className="place-card__name">{name}</h3>
            <div> 
              <button className={`place-card__like-icon`}></button>
              <p className="place-card__like-icon_counter">{like}</p>
            </div> 
          </div> 
        </div>
    );
}

export default Card;