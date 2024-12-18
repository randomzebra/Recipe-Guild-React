import React, { useState } from "react";
import './RecipeCreate.css';
function RecipeCreate({handleCreate}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const initialState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    }
  const [recipe, setRecipe] = useState(initialState)
  
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input name='name' className='create-inputs' type="text" placeholder="Name"
                value={recipe.name} onChange={(event) => {
                  setRecipe({...recipe, name: event.target.value})
                }}/>
            </td>
            <td>
              <input name='cuisine' className='create-inputs' type="text" placeholder="Cuisine"
                value={recipe.cuisine} onChange={(event) => {
                  setRecipe({...recipe, cuisine: event.target.value})
                }}/>
            </td>
            <td>
              <input name='photo' className='create-inputs' type="text" placeholder="URL"
                value={recipe.photo} onChange={(event) => {
                  setRecipe({...recipe, photo: event.target.value})
                }}/>
            </td>
            <td>
              <textarea name="ingredients" className='create-inputs' placeholder="Ingredients"
                value={recipe.ingredients} onChange={(event) => {
                  setRecipe({...recipe, ingredients: event.target.value})
                }}/>
            </td>
            <td>
              <textarea name="preparation" className='create-inputs' placeholder="Preparation"
                value={recipe.preparation} onChange={(event) => {
                  setRecipe({...recipe, preparation: event.target.value})
                }}/>
            </td>
            <td>
              <button type="submit" onClick={(event) => {
                handleCreate(event, recipe)
                setRecipe(initialState)
              }}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
