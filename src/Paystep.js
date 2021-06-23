import React from "react";
import Button from "@material-ui/core/Button";
import User from "./User";
const Paystep = (props) => {
  const [name, setName] = React.useState("");
  const fun = () => {
    props.tosettoggle();
    props.changestate();
    props.username(name);
  };

  return (
    <div className="step2div" style={{ height: "700px", width: "100%" }}>
      <div style={{ height: "20px", width: "100" }}> </div>
      <div style={{ fontWeight: "bold", fontSize: "25px", marginLeft: "44%" }}>
        View Cart
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          marginTop: "2%",
        }}
      >
        <div
          style={{ marginLeft: "27%", fontWeight: "bold", fontSize: "18px" }}
        >
          Coffee Type:
        </div>
        <div
          style={{
            marginLeft: "27%",
            fontsize: "20px",
            fontWeight: "bold",
            color: "brown",
          }}
        >
          {props.choose === 0 ? "HotCoffee" : "Coldcoffee"}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          marginTop: "2%",
        }}
      >
        <div
          style={{ marginLeft: "27%", fontWeight: "bold", fontSize: "18px" }}
        >
          Coffee Category:
        </div>
        <div
          style={{
            marginLeft: "24%",
            fontsize: "20px",
            fontWeight: "bold",
            color: "brown",
          }}
        >
          {props.category}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          marginTop: "2%",
        }}
      >
        <div
          style={{ marginLeft: "27%", fontWeight: "bold", fontSize: "18px" }}
        >
          Amount:
        </div>
        <div
          style={{
            marginLeft: "30.5%",
            fontsize: "20px",
            fontWeight: "bold",
            color: "brown",
          }}
        >
          ${props.payment + 10 * props.spoon}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          marginTop: "2%",
        }}
      >
        <div
          style={{ marginLeft: "27%", fontWeight: "bold", fontSize: "18px" }}
        >
          GST (18%):
        </div>
        <div
          style={{
            marginLeft: "29%",
            fontsize: "20px",
            fontWeight: "bold",
            color: "brown",
          }}
        >
          ${((props.payment + 10 * props.spoon) * 0.18).toFixed(1)}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          marginTop: "2%",
        }}
      >
        <div
          style={{ marginLeft: "27%", fontWeight: "bolder", fontSize: "24px" }}
        >
          Total Amount:
        </div>
        <div
          style={{
            marginLeft: "24.5%",
            fontsize: "25px",
            fontWeight: "bolder",
            color: "brown",
          }}
        >
          $
          {props.payment +
            10 * props.spoon +
            (props.payment + 10 * props.spoon) * 0.18}
        </div>
      </div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "43%",
          fontSize: "20px",
          marginTop: "40px",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="      Enter your name"
        />
      </div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "46%",
          fontSize: "20px",
          marginTop: "40px",
        }}
      >
        <Button
          onClick={fun}
          style={{ backgroundColor: "lightgray", fontWeight: "bold" }}
        >
          Pay
        </Button>
      </div>
    </div>
  );
};
export default Paystep;
