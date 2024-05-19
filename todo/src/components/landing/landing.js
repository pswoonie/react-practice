import Column from "../others/column.js";
import AppBar from "../others/appbar.js";
import Row from "../others/row.js";
import H_DIVIDER from "../others/h-divider.js";
import V_DIVIDER from "../others/v-divider.js";
import MENU_BUTTON from "../others/menu-button/menu-button.js";
import LIST_TILE from "../others/list-tile/list-tile.js";
import AddTodo from "./add-todo.js";
import Button from "../others/button/button.js";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const count = useRef(0);

  const [todoList, setList] = useState(initialList);

  const landingStyle = {
    height: "100vh",
    width: "100vw",
  };

  const goto = () => {
    navigate("/login");
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
      <Column width="100%">
        <AppBar
          leading={`completed: ${count.current}`}
          trailing={<Button onClick={goto}>Login</Button>}
        />
        <H_DIVIDER height="1px" width="100%" background="black" />
        <Row height="100%">
          <Column>
            {["Link", "Link", "Link"].map((item, index) => (
              <MENU_BUTTON key={index}>{item}</MENU_BUTTON>
            ))}
          </Column>
          <V_DIVIDER
            height="100%"
            width="1px"
            margin="0 16px"
            background="black"
          />
          <Column>
            <AddTodo addTaskCallback={onListCallback} />
            {todoList.map((item, index) => (
              <Row key={index}>
                <LIST_TILE
                  param={{ ...item, id: index }}
                  completedCountCallback={onTodoComplete}
                ></LIST_TILE>
                <Button
                  margin="16px 0 0 16px"
                  onClick={() => {
                    setList(todoList.filter((_, i) => i !== index));
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </Row>
            ))}
          </Column>
        </Row>
      </Column>
    </div>
  );
}

export default Landing;
