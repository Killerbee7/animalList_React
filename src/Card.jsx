import React from "react";
import "./Card.css";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-wrap">
        <span className="close" onClick={props.removeCard}>
          &times;
        </span>
        <img
          src={`https://source.unsplash.com/400x400/?${props.name}`}
          alt={props.name}
        ></img>
      </div>

      <div className="container">
        <h2>{props.name} </h2>
        <div className="likes">
        <button className="button-85" onClick={props.addLikes}>Dislikes</button>
          <span><FaHeart /><p>{props.likes}</p> </span>
          <button className="button-85" onClick={props.addLikes}>Add likes</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
