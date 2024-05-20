/* props
 * margin, padding
 */
function Column(props) {
  const columnStyle = {
    height: "100%",
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    display: "flex",
    flexDirection: "column",
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
  };
  return <div style={columnStyle}>{props.children}</div>;
}

export default Column;
