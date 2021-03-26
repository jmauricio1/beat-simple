import React from "react";
import { Col } from "react-bootstrap";

function Title() {
  return (
    <Col className="left-column" lg={6}>
        <div className="rect">

        </div>
      <h1>
        <span className="text-black">BE</span>AT
        <br />
        <span className="text-black">SI</span>MPLE
      </h1>
      <hr />
      <p className="title-desc">
        It's simple! Click on an individual pad or use the deisgnated keys to
        play a sound. Put them all together to play a beat. Most of all, 
        <b> have fun!</b>
      </p>
    </Col>
  );
}

export default Title;
