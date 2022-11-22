import React from "react";
import "./Card.css";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {
  return (

    <div className="card_container">
      <div className="card">
        <div className="img-wrap">
          <span className="close" onClick={props.removeCard}>
            x
          </span>
          <img
            src={`https://source.unsplash.com/300x300/?${props.name}`}
            alt={props.name}
          ></img>
        </div>
        <div className="container">
          <h2>{props.name} </h2>
          <div className="likes">
          <button className="button-85" onClick={props.disLikes}>Dislikes</button>
            <span><FaHeart /><p>{props.likes}</p></span>
            <button className="button-85" onClick={props.addLikes}>Add likes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
