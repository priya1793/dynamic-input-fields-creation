import { useState } from "react";

function App() {
  const [receipeFields, setReceipeFields] = useState([
    {
      title: "",
      ingredients: "",
      servings: "",
      instructions: "",
      rating: "",
    },
  ]);

  const handleFormFields = (e, index) => {
    let data = [...receipeFields];
    data[index][e.target.name] = e.target.value;
    setReceipeFields(data);
  };

  const removeFields = (index) => {
    let data = [...receipeFields];
    data.splice(index, 1);
    setReceipeFields(data);
  };

  const addNewReceipe = () => {
    let object = {
      title: "",
      ingredients: "",
      servings: "",
      instructions: "",
      rating: "",
    };
    setReceipeFields([...receipeFields, object]);
  };

  return (
    <>
      <div className="form-header">
        <h1>Dynamic form fields</h1>
        <button type="button" className="btn add-btn" onClick={addNewReceipe}>
          Add a new Receipe
        </button>
      </div>
      <form className="dynamic-form">
        {receipeFields.map((field, index) => (
          <div key={index} className="form-fields">
            <input
              type="text"
              name="title"
              placeholder="Enter receipe title..."
              value={field.title}
              onChange={(e) => handleFormFields(e, index)}
            />
            <input
              type="text"
              name="ingredients"
              placeholder="Enter ingredients..."
              value={field.ingredients}
              onChange={(e) => handleFormFields(e, index)}
            />
            <input
              type="text"
              name="servings"
              placeholder="Enter servings..."
              value={field.servings}
              onChange={(e) => handleFormFields(e, index)}
            />
            <textarea
              rows="5"
              type="text"
              name="instructions"
              placeholder="Enter instructions..."
              value={field.instructions}
              onChange={(e) => handleFormFields(e, index)}
            ></textarea>
            <input
              type="text"
              name="rating"
              placeholder="Enter rating..."
              value={field.rating}
              onChange={(e) => handleFormFields(e, index)}
            />
            {receipeFields.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeFields(index)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </form>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Ingredients</th>
            <th>Servings</th>
            <th>Instructions</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {receipeFields.map((receipe, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{receipe.title}</td>
              <td>{receipe.ingredients}</td>
              <td>{receipe.servings}</td>
              <td>{receipe.instructions}</td>
              <td>{receipe.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
