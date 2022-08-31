import pizzas from "./data/pizzas.json";
import Pizza from "./components/Pizza";
import AppCss from "../styles/App.module.css";

const App = () => {
  return (
    <div className={AppCss.container}>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
