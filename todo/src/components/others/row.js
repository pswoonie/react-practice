/* props
 * margin, padding
 */
function Row(props) {
  const rowStyle = {
    height: "100%",
    width: "100%",
    margin: props.margin,
    padding: props.padding,
    display: "flex",
    flexDirection: "row",
  };

  return <div style={rowStyle}>{props.children}</div>;
}

export default Row;
