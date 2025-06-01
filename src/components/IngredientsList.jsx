export default function IngredientsList({ ingredients, children }) {
  return (
    <section>
      <h1 className="title">Ingredients on hand:</h1>
      <ul>
        {ingredients.map((data) => (
          <li key={data} className="list-ingredients">
            {data}
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}
