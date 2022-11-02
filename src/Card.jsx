import React from "react";
import './Card.css';
import { FaHeart } from "react-icons/fa";

const Card=(props)=> {
    
    return (
    
    <div className="card">
      <div className="img-wrap">
        <span class="close" onClick={props.removeCard} >&times;</span>
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}></img>
      </div>
        
        <div className="container">
            <h2>{props.name} </h2>
            <p><FaHeart/> {props.likes}</p>
            <button onClick={props.addLikes}>Add likes</button>
         </div>
            
    </div>
   

    );
    
};



export default Card;