import React from 'react';
import Animal from './Animal'
import Bird from './Bird';
import About from './About';
import Home from './Home';
import { BrowserRouter,Routes, Route, NavLink } from "react-router-dom";

const Apps = () => {
    return (
        
            <BrowserRouter>
        <nav className='nav_container'>

            <div className='navMenu'>
        
           <NavLink className='nav1' to="/">Home</NavLink>
           <NavLink className='nav1' to="/animals">Animal</NavLink>
           <NavLink className='nav1' to="/birds">Bird</NavLink>
           <NavLink className='nav1' to="/about">About</NavLink>
           </div>
          

        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/animals" element={<Animal/>}/>
            <Route path="/birds" element={<Bird/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
       
        </BrowserRouter>
        
    );
};

export default Apps;
