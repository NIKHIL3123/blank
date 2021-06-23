import React from "react";
import { useState } from "react";
import Cafe_Mocha from "./Cafe_Mocha.jpg";
import coldbrew from "./coldbrew.jpg";
import irish_coffee from "./irish_coffee.jpg";

const Coldcoffeecategorylist = (props) => {
  const ownfunc1 = () => {
    props.func1(100, "Irish Coffee");
  };
  const ownfunc2 = () => {
    props.func1(150, "Cold brew");
  };
  const ownfunc3 = () => {
    props.func1(50, "Cafe Mocha");
  };

  return (
    <div className="step0div">
      <div className="hot1list" onClick={ownfunc1}>
        <img className="hotlistimg" src={irish_coffee}></img>
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
            Irish coffee
          </div>
          <div>$100</div>
        </div>
      </div>
      <div className="hot2list" onClick={ownfunc2}>
        <img className="hotlistimg" src={coldbrew}></img>
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
            Cold brew
          </div>
          <div>$150</div>
        </div>
      </div>

      <div className="hot3list" onClick={ownfunc3}>
        <img className="hotlistimg" src={Cafe_Mocha}></img>
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
            Cafe_Mocha
          </div>
          <div>$50</div>
        </div>
      </div>
    </div>
  );
};
export default Coldcoffeecategorylist;
