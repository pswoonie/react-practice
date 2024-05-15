/* props
 * margin, padding
 */
function Row(props) {
  const rowStyle = {
    height: props.height,
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
  };

  return <div style={rowStyle}>{props.children}</div>;
}

export default Row;
