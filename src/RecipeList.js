import React from "react";
import "./RecipeList.css"

function RecipeList({recipes, handleDelete}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
  function RecipeItem({ recipe , handleDelete}) {
    return (
      <tr className="recipe-item">
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img className="recipe-img" src={recipe.photo} alt={recipe.name} />
        </td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td>
          <button name="delete" onClick={(event) => handleDelete(recipe.name)}>Delete</button>
        </td>
      </tr>
    );

  }
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => {
            return <RecipeItem recipe={recipe} handleDelete={handleDelete}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
