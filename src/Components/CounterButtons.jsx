import React from "react";
import { useDispatch } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from '../Redux/action';

const CounterButtons = () => {
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton"onClick={useDispatch(handleAddActionObj(1))}>ADD</button>
      <button data-testid="reduceButton" onClick={useDispatch(handleReduceActionObj(1))}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
