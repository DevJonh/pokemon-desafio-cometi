import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Pokedex from "../pages/Pokedex";
import { useAuth } from "../store/useAuth";

const Routes = () => {
  const { userLogged } = useAuth();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        {userLogged && <Route path="/pokedex" component={Pokedex} />}
        <Route path="*" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
