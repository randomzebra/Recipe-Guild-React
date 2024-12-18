import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  handleDelete = (name) => {
    setRecipes(recipes.filter((recipe) => recipe.name !== name));
  }
  handleCreate = (event, recipe) => {
    event.preventDefault()
    console.log(recipe)
    setRecipes([...recipes, recipe])
  }
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList handleDelete={handleDelete} recipes={recipes}/>
      <RecipeCreate handleCreate={handleCreate}/>
    </div>
  );
}

export default App;
