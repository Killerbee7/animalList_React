import React from 'react';
import Animal from './Animal'
import Bird from './Bird';
import About from './About';
import Home from './Home';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

const Apps = () => {
    return (
        
            <BrowserRouter>
        <nav className='nav'>

            <div className='navMenu'>
        
           <Link className='nav1' to="/">Home</Link>
           <Link className='nav1' to="/animals">Animal</Link>
           <Link className='nav1' to="/birds">Bird</Link>
           <Link className='nav1' to="/about">About</Link>
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