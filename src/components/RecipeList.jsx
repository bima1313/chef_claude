export default function RecipeList({ datas }) {
  // function listData() {
  //   return datas.description.map((data) => (
  //     <li key={data} className="list-ingredients">{data}</li>
  //   ));
  // }
  const listData = datas.description.map((data) => (
      <li key={data} className="list-ingredients">{data}</li>
    ))
  return (
    <section>
      <h3>{datas.title}</h3>
      {datas.title === "ingredients" ? (
        <ul>{listData}</ul>
      ) : (
        <ol>{listData}</ol>
      )}      
    </section>
  );
}
