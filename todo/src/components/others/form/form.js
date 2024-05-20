import Column from "../column.js";
import Row from "../row.js";
import styles from "./form-style.module.css";

import { useState } from "react";

function CustomForm(props) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`name: ${username} , password: ${password}`);
    event.preventDefault();
  };

  return (
    <div className={styles.login}>
      <Row justifyContent="center">
        <Column width="300px">
          <h2>Login</h2>
          <form action="" onSubmit={handleSubmit}>
            <Column>
              <input
                type="text"
                name="username"
                value={username}
                onChange={onNameChange}
                placeholder="Email"
                autoComplete="email"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={onPasswordChange}
                placeholder="Password"
                autoComplete="current-password"
                required
              />
              <Row alignItems="center" margin="0 0">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </Row>
              <input type="submit" value="Login" />
            </Column>
          </form>
        </Column>
      </Row>
    </div>
  );
}

export default CustomForm;
