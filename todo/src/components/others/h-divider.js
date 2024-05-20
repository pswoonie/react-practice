/* props
 * height, width, margin, padding, background
 */
function H_DIVIDER(props) {
  const dividerStyle = {
    height: props.height,
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    content: "",
    background: props.background,
  };
  return <div style={dividerStyle}></div>;
}

export default H_DIVIDER;
