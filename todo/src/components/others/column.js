/* props
 * margin, padding
 */
function Column(props) {
  const columnStyle = {
    height: "100%",
    width: "100%",
    margin: props.margin,
    padding: props.padding,
    display: "block",
  };
  return <div style={columnStyle}>{props.children}</div>;
}

export default Column;
