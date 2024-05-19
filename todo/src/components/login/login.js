import AppBar from "../others/appbar";
import Column from "../others/column";
import CustomForm from "../others/form";

import { Drawer, DrawerButton } from "../others/drawer/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Login() {
  const [toggle, setToggle] = useState(false);

  const loginStyle = {
    height: "100vh",
    width: "100vw",
  };

  const clickCallback = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div style={loginStyle}>
      <Column height="100%" width="100%">
        <Drawer
          width="300px"
          color="#e6e6e4"
          title="drawer"
          isOpen={toggle}
          callback={clickCallback}
        ></Drawer>
        <AppBar
          color="gray"
          leading={
            <DrawerButton callback={clickCallback}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </DrawerButton>
          }
          trailing={
            <DrawerButton callback={clickCallback}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </DrawerButton>
          }
        ></AppBar>
        <CustomForm></CustomForm>
      </Column>
    </div>
  );
}

export default Login;
