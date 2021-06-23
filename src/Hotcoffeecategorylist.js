import React from "react";
import { useState } from "react";
import espresso from "./espresso.jpg";
import americano from "./americano.jpg";
import cappuccino from "./cappuccino_0.jpg";

const Hotcoffeecategory = (props) => {
  const ownfunc1 = () => {
    props.func1(100, "Cappuccino");
  };
  const ownfunc2 = () => {
    props.func1(150, "Espresso");
  };
  const ownfunc3 = () => {
    props.func1(50, "Americano");
  };

  return (
    <div className="step0div">
      <div className="hot1list" onClick={ownfunc1}>
        <img className="hotlistimg" src={cappuccino}></img>
        <div
          style={{
            width: "80%",
            height: "100%",
            verticalAlign: "middle",
          }}
        >
          <div
            style={{ fontSize: "15px", fontWeight: "bolder", marginTop: "5%" }}
          >
            Cappuccino
          </div>
          <div>$100</div>
        </div>
      </div>
      <div className="hot2list" onClick={ownfunc2}>
        <img className="hotlistimg" src={espresso}></img>
        <div
          style={{
            width: "80%",
            height: "100%",
            // verticalAlign: "middle",
          }}
        >
          <div
            style={{ fontSize: "15px", fontWeight: "bolder", marginTop: "5%" }}
          >
            Espresso
          </div>
          <div>$150</div>
        </div>
      </div>

      <div className="hot3list" onClick={ownfunc3}>
        <img className="hotlistimg" src={americano}></img>
        <div
          style={{
            width: "80%",
            height: "100%",
            verticalAlign: "middle",
          }}
        >
          <div
            style={{ fontSize: "15px", fontWeight: "bolder", marginTop: "5%" }}
          >
            Americano
          </div>
          <div>$50</div>
        </div>
      </div>
    </div>
  );
};
export default Hotcoffeecategory;
