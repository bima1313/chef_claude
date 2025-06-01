import chefImage from "/src/assets/chef.png";
export default function Header() {
  return (
    <header>
      <img src={chefImage} alt="Chef" />
      <h2>Chef Claude</h2>
    </header>
  );
}
