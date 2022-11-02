import './App.css';
import './Card.css';
import React, { Component } from 'react';
import './Header.css';
import Header from './Header';
import Card from './Card';
import { animals } from './animals';


class App extends Component{

  state = {
    animals: animals,
  };
removeHandler = (name) => {
  console.log("remove was clicked", name);
}
  addHandler = () => {
   console.log('like was clicked')
  }
  animalsList = this.state.animals.map((animal) => {
    return <Card key={animal.name} 
    name={animal.name} 
    likes={animal.likes} 
    removeCard={() => this.removeHandler(animal.name)} 
    addLikes={this.addHandler} />;
});

  render() {
  
  return ( <div>

    <Header/>
   {this.animalsList}
  </div>
  )
};
};

export default App;

