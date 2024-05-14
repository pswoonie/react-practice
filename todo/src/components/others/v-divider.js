/* props
 * height, width, margin, padding, content, background
 */
function V_DIVIDER(props) {
  const dividerStyle = {
    height: props.height,
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    content: props.content,
    background: props.background,
  };
  return <div style={dividerStyle}></div>;
}

export default V_DIVIDER;
