import styles from "./tile.module.css";

function LIST_TILE(props) {
  return <div className={styles.tile}>{props.children}</div>;
}

export default LIST_TILE;
