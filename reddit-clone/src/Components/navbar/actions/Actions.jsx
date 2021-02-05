import React from "react";

import "./Actions.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

export default function Actions() {
  const { isAuth, user } = useSelector((state) => state.auth, shallowEqual);
  if (isAuth) {
    console.log(user.username);
  }
  return (
    <div className="actions">
      {!isAuth && (
        <div className="toggle">
          <Link to="/login">
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button variant="contained" color="primary">
              SIGN UP
            </Button>
          </Link>
        </div>
      )}

      <div className="profile">
        <PersonIcon className="hoverable" />
        {isAuth && user.username}
        <ArrowDropDownIcon className="hoverable" />
      </div>
    </div>
  );
}
