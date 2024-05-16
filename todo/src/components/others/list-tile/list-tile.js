import Row from "../row.js";
import styles from "./tile.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

// Leading element
function Leading(props) {
  const leadingStyle = {
    margin: "0 0 0 8px",
  };

  return (
    <div style={leadingStyle}>
      {props.checked ? (
        <FontAwesomeIcon icon={faSquareCheck} />
      ) : (
        <FontAwesomeIcon icon={faSquare} />
      )}
    </div>
  );
}

// Center element
function Title(props) {
  const titleStyle = {
    fontWeight: "bold",
  };

  return <div style={titleStyle}>{props.children}</div>;
}

// Trailing elements: [element1, element2, ...etc]
function Trailing(props) {
  const trailingStyle = {
    margin: "0 16px 0 0",
  };

  return <div style={trailingStyle}>{props.children}</div>;
}

function LIST_TILE(props) {
  const [isChecked, setClickState] = useState(false);

  const tileStyle = {
    position: "relative",
  };

  const handleClickAction = () => {
    setClickState(!isChecked);
    props.completedCountCallback(!isChecked);
  };

  return (
    <div className={styles.tile} style={tileStyle} onClick={handleClickAction}>
      <Row width="100%" justifyContent="space-between">
        <Leading checked={isChecked}></Leading>
        <Title>{props.children}</Title>
        <Trailing></Trailing>
      </Row>
    </div>
  );
}

export default LIST_TILE;
