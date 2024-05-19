import Column from "../column.js";
import Row from "../row.js";
import styles from "./form-style.module.css";

function CustomForm(props) {
  const formStyle = {};

  return (
    <div className={styles.login} style={formStyle}>
      <Row justifyContent="center">
        <Column width="300px">
          <h2>Login</h2>
          <form>
            <Column>
              <input
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="on"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="on"
              />
              <Row alignItems="center" margin="0 0">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </Row>
              <input type="button" value="Login" />
            </Column>
          </form>
        </Column>
      </Row>
    </div>
  );
}

export default CustomForm;
