import React from "react";
import { Pizza } from "./components/Pizza";
import pizzas from "./pizzas.json";
import { ReactComponent as Logo } from "./images/pizza.svg";
import "./App.css";
import Cart from "./components/Cart";

function App() {
    return (
        <div className="App">
            <header>
                <Logo />
                <h1>Delicious Pizza</h1>
                <Cart />
            </header>

            <ul>
                {pizzas.map((pizza, i) => (
                    <Pizza key={i} pizza={pizza} />
                ))}
            </ul>
        </div>
    );
}

export default App;
