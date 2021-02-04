import React from "react";
import "./Community.css";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const communties = [
  {
    image_src: "assets/images/subreddit.jpg",
    name: "thelastofus",
  },
  {
    image_src: "assets/images/subreddit.jpg",
    name: "politics",
  },
  {
    image_src: "assets/images/subreddit.jpg",
    name: "sports",
  },
  {
    image_src: "assets/images/subreddit.jpg",
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
