import React from 'react'
import AdBanner from './AdBanner'
import RecipeContainer from './RecipeContainer'
import { useState, useEffect } from 'react'
import axios from 'axios'

const HomeScreen = () => {  
  const [recipes, setRecipes]= useState([])
  const baseURL = 'https://recipes.devmountain.com'

  const getRecipes = () => {
    axios.get(`${baseURL}/recipes`)
    .then((res => {
      setRecipes(res.data)
      console.log(res.data)
    }))
  }

  useEffect(() => {
  getRecipes()}, [])
  

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
    </div>
  )
}

export default HomeScreen