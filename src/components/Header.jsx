import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className="headerBtns">Home</button>
        </Link> 
        <Link to="/newRecipe">
          <button className="headerBtns">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
