import React from "react";
import "./Community.css";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const communties = [
  {
    image_src:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "thelastofus",
  },
  {
    image_src:
      "https://images.unsplash.com/photo-1551014857-fbd7bc284ab1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "politics",
  },
  {
    image_src:
      "https://images.unsplash.com/photo-1566215558645-2b33c87c3ba5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80",
    name: "sports",
  },
  {
    image_src:
      "https://images.unsplash.com/photo-1579634893170-8f1750e738bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bW9uZXl8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "animals",
  },
];

export default function Community() {
  return (
    <div className="community-section">
      <div className="title">
        <span>Today's Top Growing Communities</span>
      </div>
      <div className="communities-wrapper">
        {communties.map((community, index) => (
          <div className="community hoverable">
            <span>{index + 1}</span>
            <ArrowDropUp />
            <img src={community.image_src} alt="" width="40px" />
            <span className="name">r/{community.name}</span>
          </div>
        ))}
      </div>
      <div className="action-buttons">
        <Link to="/community">
          <button
            style={{
              width: "100%",
              backgroundColor: "blue",
              color: "white",
              height: "50px",
              marginLeft: "0",
            }}
          >
            View All
          </button>
        </Link>
        <div className="secondary-buttons">
          <Button color="primary">Sports</Button>
          <Button color="primary">News</Button>
          <Button color="primary">Gaming</Button>
          <Button color="primary">Aww</Button>
        </div>
      </div>
    </div>
  );
}
