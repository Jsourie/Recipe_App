import React from "react";
import RecipeList from "./RecipeList";
import "./App.css";



function RecipeView({ recipe, index, deleteRecipe }) {
    return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td className="custom-img">
          <img src={recipe.photo} alt={recipe.name} />
        </td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
        <td>
          <button name="delete" onClick={deleteRecipe}>Delete</button>
        </td>
      </tr>
    );
  }

export default RecipeView