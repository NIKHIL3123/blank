import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import hotcoffee from "./hotcoffee.jpg";
import thankyou from "./thankyou.png";
import coldcoffee from "./colfcoffee.jpg";
import Coffeeview from "./Coffeeview";
import ListIcon from "@material-ui/icons/List";
import AppsIcon from "@material-ui/icons/Apps";
import Hotcoffeecategorygrid from "./Hotcoffeecategorygrid";
import Hotcoffeecategorylist from "./Hotcoffeecategorylist";
import Coldcoffeecategorygrid from "./Coldcoffeecategorygrid";
import Coldcoffeecategorylist from "./Coldcoffeecategorylist";
import Addsugar from "./Addsugar";
import { Collapse } from "@material-ui/core";
import Paystep from "./Paystep";
import CircularProgress from "@material-ui/core/CircularProgress";
import User from "./User";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
}));

function getSteps() {
  return ["View coffee", "Select Category", "Add On"];
}
function getItem1() {
  return [
    { name: "Hotcoffee", img: "" },
    { name: "Coldcoffee", img: "" },
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select your Coffee";
    case 1:
      return "Select category";
    case 2:
      return "Add Sugar";
    default:
      return "Unknown stepIndex";
  }
}

function HorizontalLabelPositionBelowStepper(props) {
  // useEffect(() => {
  //   if (activeStep <= 1) setSugarspoon(0);
  // }, []);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [stat, setStat] = React.useState(0);

  const [choose, setChoose] = React.useState(0);
  const [username, setUsername] = React.useState("");
  const [payment, setPayment] = React.useState(0);
  const [sugarspoon, setSugarspoon] = React.useState(0);
  const [sugarspoonprice, setSugarspoonprice] = React.useState(0);

  const steps = getSteps();

  const tosettoggle = () => {
    props.settoggle();
  };

  useEffect(() => {
    setActiveStep((val) => val + props.userview);
  });
  useEffect(() => {
    setActiveStep((val) => val * props.zero);
  });

  // const tosetzero=()=>{
  //   props.tosetzerotab();
  // }
  const handleNextone = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setChoose(0);
    setStat((prevStat) => prevStat);
  };

  const handleNextonesec = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setChoose(1);
    setStat((prevStat) => prevStat);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    props.tosetzerotab();
    if (activeStep <= 2) setSugarspoon(0);
    if (activeStep <= 2) setCategory("");
  };

  const func1 = (val, val2) => {
    setPayment(val);
    setCategory(val2);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const makepaymentnext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const sugaradd = () => {
    setSugarspoon((prevSugarspoon) => prevSugarspoon + 1);
  };
  const sugarsub = () => {
    setSugarspoon((prevSugarspoon) =>
      prevSugarspoon > 0 ? prevSugarspoon - 1 : 0
    );
  };
  const usernameupdate = (val) => {
    setUsername(val);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      {activeStep >= 4 ? (
        <div className="lastpage">
          {activeStep === 4 ? (
            <img style={{ width: "60%", height: "100%" }} src={thankyou}></img>
          ) : (
            <User
              coffeetype={choose === 0 ? "HotCoffee" : "Coldcoffee"}
              coffeecategory={category}
              amount={payment + 10 * sugarspoon}
              Gst={(0.18 * (payment + 10 * sugarspoon)).toFixed(1)}
              Totalamount={
                payment + 10 * sugarspoon + (payment + 10 * sugarspoon) * 0.18
              }
              username={username}
            />
          )}
        </div>
      ) : (
        <div>
          <div style={{ width: "100%" }}>
            <Box display="flex" p={1}>
              <Box p={1} flexGrow={1}>
                <Stepper
                  activeStep={activeStep}
                  alternativeLabel
                  style={{ width: "50%", marginLeft: "20%" }}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box p={4} flexGrow={1}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                  marginRight="30%"
                >
                  &#8592; Previous Step
                </Button>
              </Box>
            </Box>
          </div>

          <div style={{ marginTop: "40px" }}>
            {activeStep === steps.length ? (
              <Paystep
                choose={choose}
                payment={payment}
                spoon={sugarspoon}
                category={category}
                tosettoggle={tosettoggle}
                changestate={makepaymentnext}
                username={usernameupdate}
              />
            ) : (
              //  <div className="variety">
              //    <Button onClick={handleReset}>Reset</Button>
              //  </div>

              <div className="belowstepper">
                {activeStep <= 1 ? (
                  <div className="buttondiv">
                    <div className="buttons">
                      <button
                        className="btn1 active"
                        onClick={() => setStat(0)}
                      >
                        <ListIcon />
                      </button>
                      <button className="btn2" onClick={() => setStat(1)}>
                        <AppsIcon />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div />
                )}

                {activeStep === 0 ? (
                  <div>
                    {/* {stat === 0 ? ( */}
                    <Collapse timeout="auto" in={stat === 0}>
                      <div className="step0div">
                        <div
                          className="hotcoffee"
                          onClick={handleNextone}
                          // onClick={() => setChoose(0)}
                        >
                          <img className="hotimg" src={hotcoffee}></img>
                          <div
                            style={{
                              width: "80%",
                              height: "100%",
                              verticalAlign: "middle",
                            }}
                          >
                            <p
                              style={{ fontSize: "15px", fontWeight: "bolder" }}
                            >
                              {" "}
                              Hot Coffee{" "}
                            </p>
                          </div>
                        </div>
                        <div className="coldcoffee" onClick={handleNextonesec}>
                          <img className="coldimg" src={coldcoffee}></img>
                          <div
                            style={{
                              width: "80%",
                              height: "100%",
                              verticalAlign: "middle",
                            }}
                          >
                            <p
                              style={{ fontSize: "15px", fontWeight: "bolder" }}
                            >
                              {" "}
                              Cold coffee{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* )  */}
                      {/* : ( */}
                    </Collapse>
                    <Collapse in={stat === 1}>
                      <div className="step0div">
                        <div className="samecoffee1" onClick={handleNextone}>
                          <img className="sameimg" src={hotcoffee}></img>
                          <div
                            style={{
                              width: "100%",
                              height: "10%",
                              textAlign: "center",
                            }}
                          >
                            <p
                              style={{ fontSize: "15px", fontWeight: "bolder" }}
                            >
                              {" "}
                              Hot Coffee{" "}
                            </p>
                          </div>
                        </div>
                        <div className="samecoffee2" onClick={handleNextonesec}>
                          <img className="sameimg" src={coldcoffee}></img>
                          <div
                            style={{
                              width: "100%",
                              height: "10%",
                              textAlign: "center",
                            }}
                          >
                            <p
                              style={{ fontSize: "15px", fontWeight: "bolder" }}
                            >
                              {" "}
                              Cold coffee{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* )} */}
                    </Collapse>
                  </div>
                ) : (
                  <div>
                    {activeStep === 1 ? (
                      <div>
                        {choose === 0 ? (
                          <div>
                            {/* {stat === 1 ? ( */}
                            <Collapse in={stat === 1}>
                              <Hotcoffeecategorygrid func1={func1} />
                            </Collapse>
                            {/* ): ( */}
                            <Collapse in={stat === 0}>
                              <Hotcoffeecategorylist func1={func1} />
                              {/* )} */}
                            </Collapse>
                          </div>
                        ) : (
                          <div>
                            {/* {stat === 1 ? ( */}
                            <Collapse timeout="20" in={stat === 1}>
                              <Coldcoffeecategorygrid func1={func1} />
                              {/* ) : ( */}
                            </Collapse>
                            <Collapse in={stat === 0}>
                              <Coldcoffeecategorylist func1={func1} />
                              {/* )} */}
                            </Collapse>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        {activeStep === 2 ? (
                          <Addsugar
                            setSugar={setSugarspoon}
                            sugaradd={sugaradd}
                            sugarsub={sugarsub}
                            totalspoon={sugarspoon}
                            nextstep={makepaymentnext}
                          />
                        ) : (
                          <div />
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default HorizontalLabelPositionBelowStepper;
