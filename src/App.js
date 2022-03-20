import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./common/Navigation";
import AddModel from "./features/addModel";

import Authentications from "./features/authentication";
import ModelDetails from "./features/modelDetails";
import ModelsList from "./features/modelsList";
import { toModel, toModels, toNewModel } from "./routes";


const modelsList = [
  {
    "id": 1,
    "nazwa": "model_ko.1.01.007",
    "data_na": "2020-03-13",
    "frakcja_testowa": 0.3,
    "n_trees": 5,
    "interaction_depth": 10,
    "shrinkage": 0.035,
    "n_minobsinnode": 15,
    "cv_folds": 2,
    "threshold": 0.5,
    "status": "ready"
  },
  {
    "id": 2,
    "nazwa": "model_ko.1.01.008",
    "data_na": "2020-03-14",
    "frakcja_testowa": 0.4,
    "n_trees": 6,
    "interaction_depth": 11,
    "shrinkage": 0.045,
    "n_minobsinnode": 20,
    "cv_folds": 3,
    "threshold": 0.6,
    "status": "new"
  }
];
const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toModel()}>
        <ModelDetails modelsList={modelsList}/>
      </Route>
      <Route path={toModels()}>
        <ModelsList modelsList={modelsList} />
      </Route>
      <Route path={toNewModel()}>
        <AddModel />
      </Route>
      <Route path="/">
        <Redirect to={toModels()}/>
      </Route>

    </Switch>
  </HashRouter>

  // <Wrapper>
  //   <Authentications />
  // </Wrapper>
)

export default App;