import { useSelector } from "react-redux";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./common/Navigation";
import AddModel from "./features/addModel";
import Authentications from "./features/authentication";
import ModelDetails from "./features/modelDetails";
import ModelsList from "./features/modelsList";
import { toModel, toModels, toNewModel } from "./routes";
import { selectIsLogged } from "./features/modelsSlice";

const App = () => {
  const logged = useSelector(selectIsLogged);

  if(!logged)
    return <Authentications />
  else
    return (
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path={toModel()}>
            <ModelDetails />
          </Route>
          <Route path={toModels()}>
            <ModelsList />
          </Route>
          <Route path={toNewModel()}>
            <AddModel />
          </Route>
          <Route path="/">
            <Redirect to={toModels()} />
          </Route>

        </Switch>
      </HashRouter>
    )
}

export default App;