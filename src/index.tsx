import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./global";
import { PokemonProvider } from "./store/usePokemon";

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <GlobalStyles />
      <App />
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
