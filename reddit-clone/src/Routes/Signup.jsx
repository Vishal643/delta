import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { signData } from "../Redux/auth/action";
import { useHistory } from "react-router-dom";
const initData = {
  username: "",
  password: "",
  name: "",
  email: "",
};

const Signup = () => {
  const [data, setData] = React.useState(initData);
  let dispatch = useDispatch();
  let history = useHistory();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    const payload = { ...data, id: uuidv4() };
    dispatch(signData(payload));
    history.push("/login");
  };

  const { name, username, password, email } = data;
  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={changeHandler}
          />
        </label>
      </div>
      <div>
        <label htmlFor="username">
          username
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={changeHandler}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          password
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={changeHandler}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          email
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={changeHandler}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
};

export default Signup;
