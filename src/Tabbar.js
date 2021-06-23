import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Stepper from "./Stepper";
import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import User from "./User";
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(10),
  },
}));

function Tabbar(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const function1 = () => props.f();

  const function2 = () => props.f2();

  return (
    <Paper className="classes.root" square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="black"
        onChange={handleChange}
      >
        <Tab label="View Coffee" onClick={function2}></Tab>
        {props.toggle === 0 ? (
          <Tab label="View receipt" textColor="grey" disabled />
        ) : (
          <Tab label="View receipt" paper-button onClick={function1} />
        )}
      </Tabs>
    </Paper>
  );
}
export default Tabbar;
