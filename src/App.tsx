import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter, Redirect } from "react-router-dom";
import HomePage from "./pages/home";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" render={() => <HomePage />} />
        <Route path="/" render={() => <Redirect to="/home" />} />
      </Switch>
    </HashRouter>
  );
};

export default App;