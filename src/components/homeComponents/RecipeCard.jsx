import React from "react";
import './RecipeCard.css'
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const clickHandler = (recipe) => {
        navigate(`/recipe/${recipe.recipe_id}`)
        console.log(recipe)
    }

    return (
        <div className="cardContainer">
            <div>
                <div className="imgContainer">
                    <img src={recipe.img_url}/>
                 </div>
                <h3 className="cardText">{recipe.recipe_name}</h3>
            </div>
            <button className="cardBtn" onClick={clickHandler}>See More</button>
        </div>
    )
}

export default RecipeCard