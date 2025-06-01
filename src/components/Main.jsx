import IngredientsList from "./IngredientsList";
import InputBox from "./InputBox";
import SuggestedRecipe from "./SuggestedRecipe";
import QuestionBox from "./QuestionBox";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { getRecipeFromGemini } from "../data/ai.JS";
import { Suspense } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const response = await getRecipeFromGemini(ingredients);
    setRecipe(response);
  }
  return (
    <main>
      <InputBox ingredients={ingredients} handleIngredients={setIngredients} />
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients}>
          {ingredients.length > 3 && <QuestionBox getRecipe={getRecipe} />}
        </IngredientsList>
      )}
      {recipe && (
        <Suspense fallback={<div className="loading"></div>}>
          <SuggestedRecipe>
            <h2>Suggested Recipe:</h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
          </SuggestedRecipe>
        </Suspense>
      )}
    </main>
  );
}
