import Column from "../others/column.js";
import AppBar from "../others/appbar.js";
import Row from "../others/row.js";
import H_DIVIDER from "../others/h-divider.js";
import V_DIVIDER from "../others/v-divider.js";

function Landing() {
  const landingStyle = {
    height: "100vh",
    width: "100vw",
  };
  return (
    <div style={landingStyle}>
      <Column>
        <AppBar height="65px" />
        <H_DIVIDER height="1px" width="100%" content="" background="black" />
        <Row>
          <Column>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </Column>
          <V_DIVIDER
            height="100%"
            width="1px"
            margin="0 16px"
            content=""
            background="black"
          />
          <Column>
            <p>world</p>
            <p>world</p>
            <p>world</p>
          </Column>
        </Row>
      </Column>
    </div>
  );
}

export default Landing;
