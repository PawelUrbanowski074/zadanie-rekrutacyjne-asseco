import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./common/Navigation";

import Authentications from "./features/authentication";
import ModelsList from "./features/modelsList";
import { toModel, toModels, toNewModel } from "./routes";


const modelsList = [
  {
    "id": 1,
    "nazwa": "model_ko.1.01.007",
    "data_na": "2020-03-13",
    "frakcja_testowa": 0.3,
    "n.trees": 5,
    "interaction.depth": 10,
    "shrinkage": 0.035,
    "n.minobsinnode": 15,
    "cv.folds": 2,
    "threshold": 0.5,
    "status": "ready"
  },
  {
    "id": 2,
    "nazwa": "model_ko.1.01.008",
    "data_na": "2020-03-14",
    "frakcja_testowa": 0.4,
    "n.trees": 6,
    "interaction.depth": 11,
    "shrinkage": 0.045,
    "n.minobsinnode": 20,
    "cv.folds": 3,
    "threshold": 0.6,
    "status": "new"
  }
];
const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toModel()}>
        <div> szczegóły modelu</div>
      </Route>
      <Route path={toModels()}>
        <ModelsList modelsList={modelsList} />
      </Route>
      <Route path={toNewModel()}>
        <div>dodaj nowy model</div>
      </Route>
      <Route path="/">
        <Redirect to={toModels()}/>
      </Route>

    </Switch>
  </HashRouter>

  // <Wrapper>
  //   {/* <Authentications /> */}
  //   <ModelsList modelsList={modelsList} />
  // </Wrapper>
)

export default App;