import "./animal.css";
import "./Card.css";
import "./home.css";
import React, { Component } from "react";

import Card from "./Card";
import { birds } from "./animals";




class Birds extends Component {
  state = {
    birds: birds,
    search: "",
  };
  removeHandler = (name) => {
    const updatedArray = this.state.birds.filter(
      (birds) => birds.name !== name
    );

    this.setState({ birds: updatedArray });
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
    console.log(e.target.value);
  };

  dislikeHandler = (name) => {
    this.setState((state) =>{
      const updatedArray=state.birds.map((bird) =>{
        if (bird.name===name){
          return {...bird, likes: bird.likes-1};
        }
        else{
          return bird;
        }
      });
      return {birds:updatedArray};
    });
  };

  addHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird
            .name === name) {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return bird;
        }
      });
      return { birds: updatedArray };
    });
  };

  render() {

    
    const animalFilter = this.state.birds.filter((bird) => {
      return bird.name.includes(this.state.search.toLocaleLowerCase());
    });

    const animalsList = animalFilter.map((bird) => {
      return (
        <Card
          key={bird.name}
          name={bird.name}
          likes={bird.likes}
          removeCard={() => this.removeHandler(bird.name)}
          addLikes={() => this.addHandler(bird.name)}
          disLikes ={() => this.dislikeHandler(bird.name)}
        />
      );
    });

    return (
      <div>
        <div className="header">
        <h1>{animalsList.length} Animals List</h1>
        <input className="search" type="text" onChange={this.searchHandler} />
        </div>
       
        <div className="animal1">{animalsList}</div>
      </div>
    );
  }
}

export default Birds;