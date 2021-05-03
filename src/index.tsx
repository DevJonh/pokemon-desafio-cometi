import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./global";
import { AuthProvider } from "./store/useAuth";
import { PokemonProvider } from "./store/usePokemon";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PokemonProvider>
        <GlobalStyles />
        <App />
      </PokemonProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
