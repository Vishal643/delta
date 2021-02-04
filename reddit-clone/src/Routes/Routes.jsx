import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../Components/landing/Landing";
import Login from "./Login";
import Signup from "./Signup";
import { Comments1 } from "../Components/PostInDetail/Comments1";
import Navbar from "../Components/navbar/Navbar";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/post/:subredditName/:postId">
          <Comments1 />
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
