import pizzas from "./data/pizzas.json";
import Pizza from "./components/Pizza";
import AppCSS from "../styles/App.module.css";
import PizzaSVG from "./svg/pizza.svg";

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <img src={PizzaSVG} alt="svg pizza logo" width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
      </div>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
