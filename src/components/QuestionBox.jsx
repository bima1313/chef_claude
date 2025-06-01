export default function QuestionBox({ getRecipe }) {
  return (
    <div className="question-box">
      <div className="question">
        <h4>Ready for a recipe?</h4>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button
        onClick={getRecipe}
      >
        Get a recipe
      </button>
    </div>
  );
}
