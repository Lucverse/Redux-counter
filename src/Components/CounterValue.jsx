import React from "react";
import { useState } from "react";
import {store} from '../Redux/store';

const CounterValue = () => {
  let counter = store.getState();
  const [state, setState] = useState(0);
  const forceUpdate = () =>{
    setState(pre=>pre+1)
  }
  store.subscribe(()=>{
    forceUpdate();
  })
  //const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
