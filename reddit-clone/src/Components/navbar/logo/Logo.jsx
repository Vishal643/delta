import React from "react";

import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo hoverable">
      <img
        height="120"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.burstimo.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fsocial-36-512.png&f=1&nofb=1"
        alt="logo"
      />
      <span>reddit</span>
    </div>
  );
}
