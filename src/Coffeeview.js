import { react } from "react";
import hotcoffee from "./hotcoffee.jpg";
import coldcoffee from "./colfcoffee.jpg";

const Coffeeview = () => {
  return (
    <div
      className="viewcoffeediv"
      style={{ width: "100%", height: "430px", display: "flex" }}
    >
      <div
        style={{
          height: "100%",
          width: "50%",
          marginLeft: "20%",
          backgroundColor: "orange",
        }}
      >
        <div style={{ width: "100%", height: "90%" }}>
          <img
            src={hotcoffee}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>
        Hot Coffee
      </div>

      <div
        style={{
          height: "100%",
          width: "50%",
          marginRight: "20%",
          backgroundColor: "cyan",
        }}
      >
        <div style={{ width: "100%", height: "90%" }}>
          <img src={coldcoffee} style={{ width: "100%", height: "100%" }}></img>
        </div>
        Cold Coffee
      </div>
    </div>
  );
};
export default Coffeeview;
