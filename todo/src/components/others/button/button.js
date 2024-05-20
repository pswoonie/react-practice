import styles from "./button.module.css";

function Button(props) {
  const buttonStyle = {
    "--height": props.height,
    "--width": props.width,
    margin: props.margin,
    "--padding": props.padding ?? "6px 8px",
    "--border": "1px solid black",
    "--border-radius": "8px",
  };
  return (
    <div className={styles.button} style={buttonStyle} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;
