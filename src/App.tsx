import pizzas from "./data/pizzas.json";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import AppCSS from "./App.module.css";
import PizzaSVG from "./svg/pizza.svg";
import AppStateProvider from "./components/AppState";

const App = () => {
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <img src={PizzaSVG} alt="svg pizza logo" width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        <ul>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
