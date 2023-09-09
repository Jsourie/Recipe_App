import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
    
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const { name, cuisine, photo, ingredients, preparation } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ name, cuisine, photo, ingredients, preparation });

    // Clear the form after submission
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={name}
                placeholder="Name"
              />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine:</label>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleInputChange}
                value={cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <label htmlFor="photo">Photo URL:</label>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleInputChange}
                value={photo}
                placeholder="URL"
              />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients:</label>
              <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                value={ingredients}
                onChange={handleInputChange}
                rows={3}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <label htmlFor="preparation">Preparation:</label>
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                value={preparation}
                onChange={handleInputChange}
                rows={3}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;


// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers