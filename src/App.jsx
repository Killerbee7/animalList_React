import './App.css';
import './Card.css';
import React, { Component } from 'react';
import './Header.css';
import Header from './Header';
import Card from './Card';
import {animals} from './animals.js';


class App extends Component{

  state = {
    animals: animals,
  };
  animalsList= animals.map((animal) => {
  <Card key={animal.name} name={animal.name} likes={animal.likes} />;
});

  render() {
  
  return ( <div>

    <Header/>
    <Card/>
  </div>
  )
};
};

export default App;
