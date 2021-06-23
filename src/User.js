import React from "react";
import coffeeshoplogo from "./coffeelogo.png";
import cafename from "./humblecafe.png";
const User = (props) => {
  return (
    <div className="user">
      <div className="userinner1">
        <div className="coffeeshoplogo">
          <img
            style={{ width: "100%", height: "100%" }}
            src={coffeeshoplogo}
          ></img>
        </div>
      </div>

      <div className="shopname">
        <div
          style={{
            fontSize: "22px",
            marginBottom: "15px",
            marginLeft: "-5%",
            paddingTop: "3%",
          }}
        >
          User Bill
        </div>
        <div
          style={{
            // fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          <div style={{ marginLeft: "10%" }}>Username:</div>
          <div style={{ marginLeft: "40%" }}>{props.username}</div>
        </div>
        <div
          style={{
            // fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          <div style={{ marginLeft: "10%" }}>Coffee Type:</div>
          <div style={{ marginLeft: "37%" }}>{props.coffeetype}</div>
        </div>
        <div
          style={{
            // fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          <div style={{ marginLeft: "10%" }}>Coffee Category:</div>
          <div style={{ marginLeft: "30%" }}>{props.coffeecategory}</div>
        </div>
        <div
          style={{
            // fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          <div style={{ marginLeft: "10%" }}>Amount:</div>
          <div style={{ marginLeft: "43%" }}>${props.amount}</div>
        </div>
        <div
          style={{
            fontSize: "20px",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          <div style={{ marginLeft: "10%" }}>GST:</div>
          <div style={{ marginLeft: "50%" }}>${props.Gst}</div>
        </div>

        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          <div style={{ marginLeft: "10%" }}>Amount paid:</div>
          <div style={{ marginLeft: "33%" }}>${props.Totalamount}</div>
        </div>

        <div style={{ marginLeft: "-5%" }}>Thank you :)</div>
      </div>
    </div>
  );
};
export default User;
