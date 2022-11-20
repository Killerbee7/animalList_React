import { Link } from "react-router-dom";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="background">
      <div className="home_container">
        <div className="animal_container">
          <h1>
            <Link className="animal" to="/animals">
              Animal
            </Link>
          </h1>
        </div>
        <div className="bird_container">
          <h1>
            <Link className="bird" to="/birds">
              Bird
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
