import React from "react";

import "./Trending.css";

const trendingItems = [
  {
    image_src:
      "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
    title: "Street art",
    description: "Coolest street art pictures ever taken",
    subreddit: {
      image_src: "assets/images/subreddit.jpg",
      name: "amazing art",
    },
  },

  {
    image_src:
      "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80",
    title: "Big tiger",
    description: "Big tiger in the wild searches for food",
    subreddit: {
      image_src:
        "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80",
      name: "animals",
    },
  },

  {
    image_src: "assets/images/programming.jpg",
    title: "Web development",
    description:
      "Top 5 tricks to speed up your web development process and get better results",
    subreddit: {
      image_src: "assets/images/subreddit.jpg",
      name: "programming",
    },
  },

  {
    image_src: "assets/images/soccer.jpg",
    title: "Epic goal",
    description: "Watch this goal being made!",
    subreddit: {
      image_src: "assets/images/subreddit.jpg",
      name: "sports",
    },
  },
];

export default function Trending() {
  return (
    <div className="trending-today-section">
      <span className="title">Trending today</span>
      <div className="items">
        {trendingItems.map((item, index) => (
          <div
            className="trending-item hoverable"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${item.image_src})`,
            }}
          >
            <div className="context">
              <span className="title">{item.title}</span>
              <br />
              <span className="description">{item.description}</span>
              <div className="subreddit">
                <img src={item.subreddit.image_src} alt="trending" />
                <span>r/{item.subreddit.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
