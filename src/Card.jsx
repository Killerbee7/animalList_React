import React from "react";
import './Card.css';
import { FaHeart } from "react-icons/fa";

const Card=(props)=> {
    
    return (
    <div>
        <div className="card">
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}></img>
        <button>remove</button>
            <h2>{props.name} </h2>
            <p><FaHeart/> {props.likes}</p>
            <button>Add likes</button>
            
        </div>
    </div>

    );
    
};



export default Card;