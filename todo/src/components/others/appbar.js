import Row from "./row.js";

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
    background: props.color,
  };

  return (
    <div style={appbarStyle}>
      <Row height="100%" justifyContent="space-between" alignItems="center">
        <Leading>{props.leading}</Leading>
        <Trailing>{props.trailing}</Trailing>
      </Row>
    </div>
  );
}

export default AppBar;
