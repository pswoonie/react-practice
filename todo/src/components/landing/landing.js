import Column from "../others/column.js";
import AppBar from "../others/appbar.js";
import Row from "../others/row.js";
import H_DIVIDER from "../others/h-divider.js";
import V_DIVIDER from "../others/v-divider.js";
import MENU_BUTTON from "../others/menu-button/menu-button.js";
import LIST_TILE from "../others/list-tile/list-tile.js";
import Spacer from "../others/spacer.js";

function Landing() {
  const landingStyle = {
    height: "100vh",
    width: "100vw",
  };
  return (
    <div style={landingStyle}>
      <Column height="100%" width="100%">
        <AppBar height="65px">
          <p>hi</p>
          <p>login</p>
        </AppBar>
        <H_DIVIDER height="1px" width="100%" background="black" />
        <Row height="100%" width="100%">
          <Column height="100%">
            <Spacer vertical="16px" />
            <MENU_BUTTON className="menu-button">hello</MENU_BUTTON>
            <Spacer vertical="16px" />
            <MENU_BUTTON className="menu-button">hello</MENU_BUTTON>
            <Spacer vertical="16px" />
            <MENU_BUTTON className="menu-button">hello</MENU_BUTTON>
          </Column>
          <V_DIVIDER
            height="100%"
            width="1px"
            margin="0 16px"
            background="black"
          />
          <Column height="100%">
            <Spacer vertical="16px" />
            <LIST_TILE>world</LIST_TILE>
            <Spacer vertical="16px" />
            <LIST_TILE>world</LIST_TILE>
            <Spacer vertical="16px" />
            <LIST_TILE>world</LIST_TILE>
          </Column>
        </Row>
      </Column>
    </div>
  );
}

export default Landing;
