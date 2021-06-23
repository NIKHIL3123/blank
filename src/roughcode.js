import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import hotcoffee from "./hotcoffee.jpg";
import coldcoffee from "./colfcoffee.jpg";
import Coffeeview from "./Coffeeview";

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
  return ["View coffee", "Select Category", "Add Sugar"];
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

function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const item1 = getItem1();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const listView = () => {};
  const gridView = () => {};

  return (
    <div className={classes.root}>
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
          <div className="variety">
            {/* <Typography className={classes.instructions}>
              Make Payment
            </Typography> */}
            <Button onClick={handleReset}>Make Payment</Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className="belowstepper">
            {/* <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography> */}
            <div className="buttondiv">
              <div className="buttons">
                <Button className="btn" onClick={listView}>
                  List
                </Button>
                <Button className="btn active" onClick={gridView}>
                  Grid
                </Button>
              </div>
            </div>
            {activeStep === 0 ? (
              <div className="step0div">
                <div className="hotcoffee">
                  <img className="hotimg" src={hotcoffee}></img>
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      verticalAlign: "middle",
                    }}
                  >
                    <p> Hot Coffee </p>
                  </div>
                </div>
                <div className="coldcoffee">
                  <img className="coldimg" src={coldcoffee}></img>
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      verticalAlign: "middle",
                    }}
                  >
                    <p> Cold coffee </p>
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default HorizontalLabelPositionBelowStepper;
