import React from "react";

function Pad(props) {
  return (
    <div
      onClick={(e) => props.onClick(props.button)}
      className="single-pad"
      style={{ backgroundColor: props.color }}
    >
      <p>{props.text} <br/>{props.desc}</p>
    </div>
  );
}

export default Pad;
