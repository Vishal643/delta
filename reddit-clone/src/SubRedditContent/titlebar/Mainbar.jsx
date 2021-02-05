import React from "react";

import CloseIcon from "@material-ui/icons/Close";
import Whatshot from "@material-ui/icons/Whatshot";
import NewReleases from "@material-ui/icons/NewReleases";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Menu from "@material-ui/icons/Menu";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import "./Mainbar.css";
import Posts from "../SubRedditPost/SubRedditPosts";

export default function MainBar() {
  return (
    <div className="main-bar">
      <div className="update-card">
        <div className="top-section">
          <span>UPDATES FROM REDDIT</span>
          <CloseIcon className="hoverable" />
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-element hoverable">
          <Whatshot color="rgb(55, 147, 201)" />
          <span>Hot</span>
        </div>
        <div className="filter-element hoverable">
          <span>Everywhere</span>
          <ArrowDropDown />
        </div>
        <div className="filter-element-secondary hoverable">
          <NewReleases />
          <span>New</span>
        </div>
        <div className="filter-element-secondary hoverable">
          <TrendingUp />
          <span>Top</span>
        </div>
        <MoreHoriz className="filter-element-tertiary hoverable" />
        <div className="spacer"></div>
        <div className="filter-element-menu hoverable">
          <Menu />
          <ArrowDropDown />
        </div>
      </div>
      <Posts />
    </div>
  );
}
