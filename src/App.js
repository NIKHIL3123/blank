import "./App.css";
import Heroimgcomp from "./Heroimgcomp";
import Tabbar from "./Tabbar";
import HorizontalLabelPositionBelowStepper from "./Stepper";
import React from "react";
function App() {
  const [toggle, setToggle] = React.useState(0);
  const [view, setView] = React.useState(0);
  const [zero, setZero] = React.useState(1);
  const fun = () => {
    setToggle(1);
  };
  const funneg = () => setToggle(0);

  const f = () => {
    setView(1);
  };
  const f2 = () => {
    setZero(0);
  };

  return (
    <div className="App">
      <Heroimgcomp />
      <Tabbar toggle={toggle} f={f} f2={f2} />
      <HorizontalLabelPositionBelowStepper
        settoggle={fun}
        tosetzerotab={funneg}
        userview={view}
        zero={zero}
      />
    </div>
  );
}

export default App;
