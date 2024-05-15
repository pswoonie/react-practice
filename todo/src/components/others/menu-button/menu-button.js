import styles from "./button.module.css";

function MENU_BUTTON(props) {
  return (
    <div
      className={styles.button}
      onClick={() => {
        alert("hi");
      }}
    >
      {props.children}
    </div>
  );
}

export default MENU_BUTTON;
