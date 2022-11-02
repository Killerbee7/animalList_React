import "./App.css";
import "./Card.css";
import React, { Component } from "react";

import Card from "./Card";
import { animals } from "./animals";

class App extends Component {
  state = {
    animals: animals,
    search: "",
  };
  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );

    this.setState({ animals: updatedArray });
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
    console.log(e.target.value);
  };

  addHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return { animals: updatedArray };
    });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.search);
    });

    const animalsList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          removeCard={() => this.removeHandler(animal.name)}
          addLikes={() => this.addHandler(animal.name)}
        />
      );
    });

    return (
      <div>
        <div className="header">
        <h1>{animalsList.length} Animals List</h1>
        <input className="search" type="text" onChange={this.searchHandler} />
        </div>
        <div className="animal">{animalsList}</div>
      </div>
    );
  }
}

export default App;
