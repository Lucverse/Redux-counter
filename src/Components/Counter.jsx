import React from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
const Counter = () => {
  return (
      <div data-testid="counter">
        <h1>Counter Application</h1>
        {<CounterValue />}

        {<CounterButtons />}
      </div>

  );
};

export default Counter;
