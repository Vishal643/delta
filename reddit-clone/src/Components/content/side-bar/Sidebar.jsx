import React from "react";

import "./Sidebar.css";
import Community from "../community/Community";

export default function SideBar() {
  return (
    <div className="side-bar">
      <Community />
      <div
        className="div-2"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            alignSelf: "center",
          }}
        >
          <img
            style={{ display: "inline-block", width: "30px" }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.zLjVb9DtQxSnphZdLqUSDAHaHa%26pid%3DApi&f=1"
            alt=""
          />
        </div>
        <div>
          <span>
            <strong>Reddit Premium</strong>
          </span>
          <br />
          <p>The best Reddit experience, with monthly Coins</p>
        </div>
        <div>
          <button style={{ width: "100px" }}>Try Now</button>
        </div>
      </div>
    </div>
  );
}
