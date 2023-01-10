import React from 'react'
import { useState } from 'react'
import './RecipeCard.css'
import RecipeCard from './RecipeCard'

const RecipeContainer = ({recipes}) => {
    const [search, setSearch] = useState('')

    const recipeDisplay = recipes.filter((recipe, index) => {
        let recipe_name = recipe.recipe_name.toLowerCase()
        let params = search.toLowerCase()
        return recipe_name.includes(params)
    }).map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })

  return (
    <section className='recipeDisplay'>
        <span className='searchbar'>
        <input
        type="text"
        value={search}
        onChange={(element)=> setSearch(element.target.value)}
        placeholder="Search for a recipe"
        />
        </span>
        <div className='recipeContainer'>
            {recipeDisplay ? recipeDisplay : <h2>No Recipes Available</h2>}
        </div>
    </section>
  )
}

export default RecipeContainer