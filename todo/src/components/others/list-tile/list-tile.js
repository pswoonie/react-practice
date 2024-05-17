import Row from "../row.js";
import styles from "./tile.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

// Leading element
function Leading(props) {
  const leadingStyle = {
    margin: "0 0 0 8px",
  };

  return <div style={leadingStyle}>{props.children}</div>;
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
  const id = props.param.id;
  const isChecked = props.param.isChecked;

  const tileStyle = {
    position: "relative",
  };

  const onClick = () => {
    props.completedCountCallback({ id: id, isChecked: !isChecked });
  };

  return (
    <div className={styles.tile} style={tileStyle} onClick={onClick}>
      <Row width="100%" justifyContent="space-between">
        <Leading>
          {isChecked ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </Leading>
        <Title>{props.param.text}</Title>
        <Trailing></Trailing>
      </Row>
    </div>
  );
}

export default LIST_TILE;
