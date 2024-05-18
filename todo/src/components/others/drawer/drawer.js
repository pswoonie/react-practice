import styles from "./drawer.module.css";

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
      <div className={styles.drawer} style={drawerStyle}></div>
    </div>
  );
}
