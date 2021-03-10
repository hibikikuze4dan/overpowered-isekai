import React from "react";
import "./App.css";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import RoutesComponent from "./components/routes";
import ArrowNavigatorComponent from "./components/arrow-navigator";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#000000FF",
        color: "#FFFFFFFF",
        overflowX: "hidden",
        padding: "4rem .5rem",
      }}
    >
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
