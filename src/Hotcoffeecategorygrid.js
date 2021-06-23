import React from "react";
import { useState } from "react";
import espresso from "./espresso.jpg";
import americano from "./americano.jpg";
import cappuccino from "./cappuccino_0.jpg";

const Hotcoffeecategorygrid = (props) => {
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
      <div className="hot1grid" onClick={ownfunc1}>
        <img className="hotgridimg" src={cappuccino}></img>
        <div
          style={{
            width: "100%",
            height: "60px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bolder" }}>
            Cappucino
          </div>
          <div>Price $100</div>
        </div>
      </div>

      <div className="hot2grid" onClick={ownfunc2}>
        <img className="hotgridimg" src={espresso}></img>
        <div
          style={{
            width: "100%",
            height: "60px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bolder" }}>Espresso</div>
          <div>Price $150</div>
        </div>
      </div>

      <div className="hot3grid" onClick={ownfunc3}>
        <img className="hotgridimg" src={americano}></img>
        <div
          style={{
            width: "100%",
            height: "60px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bolder" }}>
            Americano
          </div>
          <div>Price $50</div>
        </div>
      </div>
    </div>
  );
};
export default Hotcoffeecategorygrid;
