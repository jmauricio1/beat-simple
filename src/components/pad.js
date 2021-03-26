import React from "react";

function Pad(props) {

  return (
    <div className="single-pad" style={{backgroundColor: props.color}}>
      <p>{props.text}</p>
    </div>
  );
}

export default Pad;
