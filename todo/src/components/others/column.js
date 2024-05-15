/* props
 * margin, padding
 */
function Column(props) {
  const columnStyle = {
    height: props.height,
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    display: "flex",
    flexDirection: "column",
  };
  return <div style={columnStyle}>{props.children}</div>;
}

export default Column;
