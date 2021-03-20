import React from "react";
import "./App.css";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import RoutesComponent from "./components/routes";
import ArrowNavigatorComponent from "./components/arrow-navigator";
import ApplicationBarComponent from "./components/app-bar";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#FFFFFF",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderColor: "white",
      },
    },
  },
});

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#000000FF",
        color: "#FFFFFFFF",
        overflowX: "hidden",
      }}
    >
      <ThemeProvider theme={theme}>
        <ApplicationBarComponent />
        <HashRouter>
          <div style={{ padding: "4rem .5rem" }}>
            <ArrowNavigatorComponent />
            <Switch>
              <RoutesComponent />
            </Switch>
            <Route exact path="/" render={() => <Redirect to="/opening" />} />
            <ArrowNavigatorComponent />
          </div>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
