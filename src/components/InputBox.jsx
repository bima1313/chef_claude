export default function InputBox({ ingredients, handleIngredients }) {
  function addIngredient(formData) {
    const newIngredient = formData.get("add-ingredient");    
    handleIngredients([...ingredients, newIngredient]);
  }

  return (
    <form action={addIngredient} className="input-form">
      <input
        type="text"
        name="add-ingredient"
        id="add-ingredient"
        aria-label="Add Ingredient"
        placeholder="e.g oregano"
      />
      <button>Add ingredient</button>
    </form>
  );
}
