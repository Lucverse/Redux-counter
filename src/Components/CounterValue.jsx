import React from "react";
import { useState } from "react";
import Store from "redux";

const CounterValue = () => {
  const [state, setState] = useState(0);
  let counter = 1;
  //const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
