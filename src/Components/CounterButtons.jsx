import React from "react";
import { store } from '../Redux/store';
import { handleAddActionObj, handleReduceActionObj } from '../Redux/action';

const CounterButtons = () => {
  return (
    <div data-testid="counterButtons">
      <button onClick={() => {
        store.dispatch(handleAddActionObj(1))
      }} data-testid="addButton">ADD</button>

      <button onClick={() => {
        store.dispatch(handleReduceActionObj(1))
      }} data-testid="reduceButton">REDUCE</button>
    </div>
  );
};
export default CounterButtons;