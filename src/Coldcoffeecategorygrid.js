import React from "react";
import { useState } from "react";
import Cafe_Mocha from "./Cafe_Mocha.jpg";
import coldbrew from "./coldbrew.jpg";
import irish_coffee from "./irish_coffee.jpg";

const Coldcoffeecategorygrid = (props) => {
  const ownfunc1 = () => {
    props.func1(100, "Irish Coffee");
  };
  const ownfunc2 = () => {
    props.func1(150, "Cold Brew");
  };
  const ownfunc3 = () => {
    props.func1(50, "Cafe Mocha");
  };

  return (
    <div className="step0div">
      <div className="cold1grid" onClick={ownfunc1}>
        <img className="coldgridimg" src={irish_coffee}></img>
        <div
          style={{
            width: "100%",
            height: "60px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bolder" }}>
            Irish Coffee
          </div>
          <div>Price $100</div>
        </div>
      </div>

      <div className="cold2grid" onClick={ownfunc2}>
        <img className="coldgridimg" src={coldbrew}></img>
        <div
          style={{
            width: "100%",
            height: "60px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bolder" }}>
            Cold brew
          </div>
          <div>Price $150</div>
        </div>
      </div>

      <div className="cold3grid" onClick={ownfunc3}>
        <img className="coldgridimg" src={Cafe_Mocha}></img>
        <div
          style={{
            width: "100%",
            height: "60px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bolder" }}>
            Cafe Mocha
          </div>
          <div>Price $50</div>
        </div>
      </div>
    </div>
  );
};
export default Coldcoffeecategorygrid;
