import React, { useState } from "react";
import { Route, Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import Annotate from "./components/Annotate";
import Login from "./components/Login/Login";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Annotate} />
        <PrivateRoute
          path="/annotate"
          component={Annotate}
        />
      </Switch>
    </div>
  );
};

export default App;
