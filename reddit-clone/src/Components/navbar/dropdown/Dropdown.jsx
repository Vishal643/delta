import React from "react";
import { useHistory } from "react-router-dom";

const Dropdown = () => {
  let history = useHistory();
  const [title, setTitle] = React.useState("");
  console.log(title);
  const handleChange = (e) => {
    setTitle(e.target.value);
    // for changing the route
    history.push(`/${title}`);
  };
  history.push(`/${title}`);
  return (
    <div>
      <select
        name="dropdown"
        style={{
          width: "180px",
          height: "35px",
          boxShadow: "0 0 4px lightgray",
        }}
        value={title}
        onChange={(e) => handleChange(e)}
      >
        <option value="home">Home</option>
        <option value="community">Community</option>
      </select>
    </div>
  );
};

export default Dropdown;
