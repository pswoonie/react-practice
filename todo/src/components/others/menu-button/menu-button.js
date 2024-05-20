import styles from "./button.module.css";

import { Link } from "react-router-dom";

function MENU_BUTTON(props) {
  return (
    <div className={styles.button}>
      <Link to="/login">{props.children}</Link>
    </div>
  );
}

export default MENU_BUTTON;
