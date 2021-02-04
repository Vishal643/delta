import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loginData } from "../Redux/auth/action";
import styles from "./Signup.module.css";
const initData = {
  username: "",
  password: "",
};

const Login = () => {
  const [data, setData] = React.useState(initData);
  const { isAuth, isLoading, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: [value] });
  };
  let history = useHistory();
  let dispatch = useDispatch();
  const handleSubmit = () => {
    const payload = { ...data };
    dispatch(loginData(payload));
  };
  React.useEffect(() => {
    if (isAuth) {
      history.replace("/");
    }
  }, [isAuth, history]);
  const { username, password } = data;
  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
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
      <button onClick={handleSubmit}>Submit</button>
      {isLoading && <div>...Loading...</div>}
      {isError && <div>...password or username wrong...</div>}
    </div>
  );
};

export default Login;
