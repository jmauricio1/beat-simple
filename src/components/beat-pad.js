import React from "react";
import { Col } from "react-bootstrap";
import Pad from "./pad";

import padInfo from "./../pad-info";

import akick1 from "./../sounds/kick1.wav";
import aclap from "./../sounds/clap.wav";
import ahihat from "./../sounds/hihat.wav";
import ahihat2 from "./../sounds/hihat2.wav";
import aloop1 from "./../sounds/loop1.wav";
import aloop2 from "./../sounds/loop2.wav";
import aloop3 from "./../sounds/loop3.wav";
import aloop4 from "./../sounds/loop4.wav";

document.addEventListener("keydown", function (e) {
  theSound(e.key);
});

function playSound(key) {
  theSound(key.toLowerCase());
}

function theSound(theKey) {
  switch (theKey) {
    case "x":
      var kick1 = new Audio(akick1);
      kick1.play();
      break;
    case "c":
      var clap = new Audio(aclap);
      clap.play();
      break;
    case "v":
      var hh1 = new Audio(ahihat);
      hh1.play();
      break;
    case "b":
      var hh2 = new Audio(ahihat2);
      hh2.play();
      break;
    case "d":
      var loop1 = new Audio(aloop1);
      loop1.play();
      break;
    case "f":
      var loop2 = new Audio(aloop2);
      loop2.play();
      break;
    case "g":
      var loop3 = new Audio(aloop3);
     loop3.play();
      break;
    case "h":
      var loop4 = new Audio(aloop4);
      loop4.play();
      break;
    default:
      break;
  }
}

function BeatPad() {
  return (
    <Col className="right-column" xlg={6}>
      <div className="beat-pad-grid">
        {padInfo.map((item) => {
          return (
            <Pad
              key={item.id}
              button={item.buttonKey}
              text={item.buttonKey}
              color={item.color}
              onClick={playSound}
              desc={item.desc}
            ></Pad>
          );
        })}
      </div>
    </Col>
  );
}

export default BeatPad;
