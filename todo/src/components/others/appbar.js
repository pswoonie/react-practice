import Row from "./row.js";
import Button from "./button/button.js";

function Leading(props) {
  const leadingStyle = {
    margin: "0 0 0 16px",
  };
  return <div style={leadingStyle}>{props.children}</div>;
}

function Trailing(props) {
  const trailingStyle = {
    margin: "0 16px 0 0",
  };
  return (
    <div style={trailingStyle}>
      <Row>{props.children}</Row>
    </div>
  );
}

/* props
 * height
 */
function AppBar(props) {
  const appbarStyle = {
    height: props.height ?? "65px",
    width: "100%",
  };
  return (
    <div style={appbarStyle}>
      <Row
        height="100%"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Leading>completed: {props.count ?? 0}</Leading>
        <Trailing>
          <Button>Login</Button>
        </Trailing>
      </Row>
    </div>
  );
}

export default AppBar;
