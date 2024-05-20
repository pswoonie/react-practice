import styles from "./button.module.css";
import Row from "../others/row.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function AddTodo(props) {
  const [inputValue, setInput] = useState("");

  const titleStyle = {
    fontSize: "25px",
    color: "blue",
  };

  const inputStyle = {
    height: "35px",
    width: "250px",
    padding: "0 35px 0 16px",
    border: "1px solid black",
    borderRadius: "8px",
  };

  const labelStyle = {
    margin: "0 0 0 16px",
  };

  const buttonStyle = {
    "--height": "35px",
    "--width": "100px",
    "--border": "1px solid gray",
    "--border-radius": "8px",
  };

  const clearTextStyle = {
    border: "none",
    background: "none",
    position: "absolute",
    top: "150px",
    left: "385px",
  };

  const onInputChange = (elem) => {
    setInput(elem.target.value);
  };

  const onReset = () => {
    setInput("");
  };

  const onButtonClicked = () => {
    if (inputValue) {
      props.addTaskCallback(inputValue);
    }
  };

  return (
    <div>
      <p style={titleStyle}>New Task</p>
      <Row>
        <input
          type="text"
          id="enter-task"
          name="enter-task"
          value={inputValue}
          style={inputStyle}
          onChange={onInputChange}
        />
        <button
          className={styles.clearText}
          style={clearTextStyle}
          onClick={onReset}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <label htmlFor="enter-task" style={labelStyle}>
          <button
            className={styles.button}
            style={buttonStyle}
            onClick={onButtonClicked}
          >
            Add
          </button>
        </label>
      </Row>
    </div>
  );
}

export default AddTodo;
