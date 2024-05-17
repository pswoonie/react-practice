import Column from "../others/column.js";
import AppBar from "../others/appbar.js";
import Row from "../others/row.js";
import H_DIVIDER from "../others/h-divider.js";
import V_DIVIDER from "../others/v-divider.js";
import MENU_BUTTON from "../others/menu-button/menu-button.js";
import LIST_TILE from "../others/list-tile/list-tile.js";
import Spacer from "../others/spacer.js";
import AddTodo from "./add-todo.js";
import Button from "../others/button/button.js";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Landing() {
  const initialList = [
    {
      text: "todo",
      isChecked: false,
    },
    {
      text: "todo",
      isChecked: false,
    },
    {
      text: "todo",
      isChecked: false,
    },
  ];

  const count = useRef(0);

  const [todoList, setList] = useState(initialList);

  const landingStyle = {
    height: "100vh",
    width: "100vw",
  };

  const onListCallback = (inputValue) => {
    setList((prev) => [...prev, { text: inputValue, isChecked: false }]);
  };

  const onTodoComplete = (data) => {
    if (data.isChecked) {
      count.current++;
    } else {
      if (count.current > 0) {
        count.current--;
      }
    }

    setList((prev) =>
      prev.map((item, index) =>
        index === data.id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div style={landingStyle}>
      <Column height="100%" width="100%">
        <AppBar count={count.current} />
        <H_DIVIDER height="1px" width="100%" background="black" />
        <Row height="100%" width="100%">
          <Column height="100%">
            {["Link", "Link", "Link"].map((item, index) => (
              <Column key={index}>
                <Spacer vertical="16px" />
                <MENU_BUTTON>{item}</MENU_BUTTON>
              </Column>
            ))}
          </Column>
          <V_DIVIDER
            height="100%"
            width="1px"
            margin="0 16px"
            background="black"
          />
          <Column height="100%">
            <AddTodo addTaskCallback={onListCallback} />
            {todoList.map((item, index) => (
              <Column key={index}>
                <Spacer vertical="16px" />
                <Row>
                  <LIST_TILE
                    param={{ ...item, id: index }}
                    completedCountCallback={onTodoComplete}
                  ></LIST_TILE>
                  <Button
                    margin="0 0 0 16px"
                    onClick={() => {
                      setList(todoList.filter((_, i) => i !== index));
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </Button>
                </Row>
              </Column>
            ))}
          </Column>
        </Row>
      </Column>
    </div>
  );
}

export default Landing;
