/* props
 * height
 */
function AppBar(props) {
  const appbarStyle = {
    height: props.height,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  };
  return <div style={appbarStyle}>{props.children}</div>;
}

export default AppBar;
