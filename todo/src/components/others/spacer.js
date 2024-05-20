function Spacer(props) {
  const spacerStyle = {
    height: props.vertical,
    width: props.horizontal,
  };
  return <div style={spacerStyle}></div>;
}

export default Spacer;
