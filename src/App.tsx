import pizzas from "./data/pizzas.json";
import Pizza from "./components/Pizza";
import AppCss from "../styles/App.module.css";
import PizzaSVG from "./svg/pizza.svg";

const App = () => {
  return (
    <div className={AppCss.container}>
      <img src={PizzaSVG} alt="svg pizza logo" width={120} height={120} />
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
