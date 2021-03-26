import React from "react";
import { Col } from "react-bootstrap";
import Pad from "./pad";

import padInfo from "./../pad-info";

import akick1 from "./../sounds/kick1.wav";
import akick2 from "./../sounds/kick2.wav";
import akick3 from "./../sounds/kick3.wav";
import aclap from "./../sounds/clap.wav";
import ahihat from "./../sounds/hihat.wav";
import ahihat2 from "./../sounds/hihat2.wav";
import anoise from "./../sounds/noise.wav";
import astab1 from "./../sounds/stab.wav";
import astab2 from "./../sounds/stab2.wav";
import astab3 from "./../sounds/stab3.wav";
import asfx from "./../sounds/sfx.wav";
import aglitch from "./../sounds/glitch.wav";
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
      var kick2 = new Audio(akick2);
      kick2.play();
      break;
    case "v":
      var kick3 = new Audio(akick3);
      kick3.play();
      break;
    case "b":
      var clap = new Audio(aclap);
      clap.play();
      break;
    case "d":
      var hihat = new Audio(ahihat);
      hihat.play();
      break;
    case "f":
      var hihat2 = new Audio(ahihat2);
      hihat2.play();
      break;
    case "g":
      var noise = new Audio(anoise);
      noise.play();
      break;
    case "h":
      var stab1 = new Audio(astab1);
      stab1.play();
      break;
    case "r":
      var stab2 = new Audio(astab2);
      stab2.play();
      break;
    case "t":
      var stab3 = new Audio(astab3);
      stab3.play();
      break;
    case "y":
      var sfx = new Audio(asfx);
      sfx.play();
      break;
    case "u":
      var glitch = new Audio(aglitch);
      glitch.play();
      break;
    case "5":
      var loop1 = new Audio(aloop1);
      loop1.play();
      break;
    case "6":
      var loop2 = new Audio(aloop2);
      loop2.play();
      break;
    case "7":
      var loop3 = new Audio(aloop3);
     loop3.play();
      break;
    case "8":
      var loop4 = new Audio(aloop4);
      loop4.play();
      break;
    default:
      break;
  }
}

function BeatPad() {
  return (
    <Col className="right-column" lg={6}>
      <div className="beat-pad-grid">
        {padInfo.map((item) => {
          return (
            <Pad
              key={item.id}
              button={item.buttonKey}
              text={item.buttonKey}
              color={item.color}
              onClick={playSound}
            ></Pad>
          );
        })}
      </div>
    </Col>
  );
}

export default BeatPad;
