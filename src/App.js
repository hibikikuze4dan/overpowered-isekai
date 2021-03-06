import React from "react";
import "./App.css";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import RoutesComponent from "./components/routes";
import ArrowNavigatorComponent from "./components/arrow-navigator";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ArrowNavigatorComponent />
        <Switch>
          <RoutesComponent />
        </Switch>
        <Route exact path="/" render={() => <Redirect to="/opening" />} />
        <ArrowNavigatorComponent />
      </HashRouter>
    </div>
  );
}

export default App;
