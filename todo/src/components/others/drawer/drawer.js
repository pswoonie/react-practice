import styles from "./drawer.module.css";
import Column from "../column.js";
import Row from "../row.js";
import H_DIVIDER from "../h-divider.js";
import ListBuilder from "../list-builder.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export function DrawerButton(props) {
  const handleCallback = () => {
    props.callback();
  };

  return (
    <div>
      <button className={styles.toggle} onClick={handleCallback}>
        {props.children}
      </button>
    </div>
  );
}

export function Drawer(props) {
  const blurStyle = {
    display: props.isOpen ? "block" : "none",
  };

  const drawerStyle = {
    width: props.width,
    background: props.color,
    transform: props.isOpen ? "translateX(0)" : "translateX(-100%)",
  };

  const handleCallback = () => {
    props.callback();
  };

  return (
    <div>
      <div
        className={styles.blur}
        style={blurStyle}
        onClick={handleCallback}
      ></div>
      <div className={styles.drawer} style={drawerStyle}>
        <Column>
          <Row justifyContent="space-between" alignItems="center">
            <p className={styles.title}>{props.title}</p>
            <button className={styles.back_arrow} onClick={handleCallback}>
              <FontAwesomeIcon icon={faArrowLeftLong} size="2x" />
            </button>
          </Row>
          <H_DIVIDER
            height="1px"
            width="100%"
            background="black"
            margin="16px 0"
          ></H_DIVIDER>
          <ListBuilder
            list={["menu1", "menu2", "menu3", "menu4", "menu5"]}
          ></ListBuilder>
        </Column>
      </div>
    </div>
  );
}
