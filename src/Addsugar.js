import React, { useState, useEffect } from "react";
import addon from "./addon.png";
import spoon from "./spon.jpeg";
import negativeon from "./negative.png";
import Button from "@material-ui/core/Button";
const Addsugar = (props) => {
  const addfun = () => {
    props.sugaradd();
  };
  const subon = () => {
    props.sugarsub();
  };
  const func = () => {
    props.nextstep();
  };

  return (
    <div className="step2div">
      <div className="step0div">
        <div className="addon" onClick={addfun}>
          <img className="sugarimg" src={addon}></img>
        </div>
        <div className="spoon">
          <img className="sugarimg" src={spoon}></img>
        </div>
        <div className="negativeon" onClick={subon}>
          <img className="sugarimg" src={negativeon}></img>
        </div>
      </div>
      <div style={{ textAlign: "left", marginLeft: "22%", fontSize: "20px" }}>
        Sugar spoon : {props.totalspoon}
      </div>
      <div style={{ marginLeft: "23%", marginTop: "20px" }}>
        {" "}
        Per spoon: $10
      </div>

      {/* <div
        style={{
          textAlign: "left",
          marginLeft: "22%",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        Total Sugar Price: {props.totalspoon * 10}
      </div> */}
      <div
        style={{
          textAlign: "left",
          marginLeft: "75%",
          fontSize: "20px",
          marginTop: "40px",
        }}
      >
        <Button
          onClick={func}
          style={{ backgroundColor: "lightgray", fontWeight: "bold" }}
        >
          Make Payment
        </Button>
      </div>
    </div>
  );
};
export default Addsugar;
