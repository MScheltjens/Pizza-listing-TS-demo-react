import pizzas from "./data/pizzas.json";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <ul>
      {pizzas.map((pizza) => {
        return <Pizza key={pizza.id} pizza={pizza} />;
      })}
    </ul>
  );
};

export default App;
