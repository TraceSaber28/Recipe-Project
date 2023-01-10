import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./DetailsScreen.css"

const DetailScreen = () => {  
  const {id} = useParams()

  const [recipeDetails, setRecipeDetails] = useState({})
  const baseURL = "https://recipes.devmountain.com"

  useEffect(() => {
    axios.get(`${baseURL}/recipes/${id}`)
    .then((res) => {
      setRecipeDetails(res.data)
    })
  }, [])

  return (
    <section id='detailsSreen'>
      <div id='imgContainer'>
      <img src={recipeDetails.image_url}/>
      <h1 id='detailsName'>{recipeDetails.recipe_name}</h1>
      </div>
      <div id='recipeDetails'>
        <div id='recipeDetailsContainer'>
        <h2 className='title'>Recipe</h2>
        <h3 className='recipeHeaders'>Prep Time: {recipeDetails.prep_time}</h3>
        <h3 className='recipeHeaders'>Cook Time: {recipeDetails.cook_time}</h3>
        <h3 className='recipeHeaders'>Serves: {recipeDetails.serves}</h3>
        </div>
        <div className='prepContainer'>
        <h2 className='title'>Ingredients</h2>
        <p id='ingredientsDetails'></p>
        <h2 className='title'>Instructions</h2>
        <p id='instructionsDetails'></p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
