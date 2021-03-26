import React from "react";
import {Col } from "react-bootstrap";
import Pad from "./pad";

import padInfo from "./../pad-info";

function BeatPad() {
  return (
    <Col className="right-column" lg={6}>
      <div className="beat-pad-grid">
        {padInfo.map((item) => {
          return (
            <Pad
              key={item.id}
              name={item.buttonKey}
              text={item.buttonKey}
              color={item.color}
            ></Pad>
          );
        })}
      </div>
    </Col>
  );
}

export default BeatPad;
