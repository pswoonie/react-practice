function Tile(props) {
  const tileStyle = {
    width: "100%",
    margin: "6px 0",
    fontSize: "35px",
  };
  return (
    <div>
      <button style={tileStyle} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

function ListBuilder(props) {
  return (
    <div>
      {props.list.map((item, index) => (
        <Tile
          key={index}
          onClick={() => {
            alert(`navigate to menu ~ ${index + 1}`);
          }}
        >
          {item}
        </Tile>
      ))}
    </div>
  );
}

export default ListBuilder;
