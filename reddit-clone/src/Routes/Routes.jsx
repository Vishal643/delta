import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../Components/landing/Landing";
import Login from "./Login";
import Signup from "./Signup";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/sign-up">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
