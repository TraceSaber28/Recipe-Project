import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NewRecipeScreen.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const baseURL = "https://recipes.devmountain.com";
  const navigate = useNavigate();

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;

    axios
      .post(`${baseURL}/recipes`, values)
      .then((res) => {
        console.log(res.data);
        navigate(`/recipe/${res.data[0][0].recipe_id}`);
      })
      .catch((err) => console.log(err));
  };

  const addIngredients = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const ingredientsDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section id="addFormContainer">
      <h1 id="formTitle">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="inputContainer">
                <input
                  placeholder="Name"
                  value={values.recipeName}
                  onChange={handleChange}
                  name="recipeName"
                />
                <input
                  placeholder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                />
              </div>
              <div className="radioContainer">
                <span>
                  <input
                    type="radio"
                    value="Cook"
                    onChange={handleChange}
                    name="type"
                  />
                  <label>Cook</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Bake"
                    onChange={handleChange}
                    name="type"
                  />
                  <label>Drink</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Drink"
                    onChange={handleChange}
                    name="type"
                  />
                  <label>Cook</label>
                </span>
              </div>
              <div className="inputContainer">
                <input
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name="prepTime"
                />
                <input
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name="cookTime"
                />
                <input
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                  name="serves"
                />
              </div>
              <h3>Ingredients</h3>
              <div className="inputContainer">
                <div className="ingredientInputs">
                <input
                  placeholder="Ingredient Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Ingredient Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                </div>
                <ul>{ingredientsDisplay}</ul>
              </div>
              <button id="addIngredientBtn" type='button' onClick={() => addIngredients()}>
                Add Another
              </button>
              <textarea
                placeholder="Instructions"
                rows={5}
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              />
              <button className="cardBtn" type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
