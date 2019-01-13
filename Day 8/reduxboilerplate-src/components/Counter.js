import React, {Component} from "react";

const Counter = ({ value, onIncrement, onDecrement, onClear, onIncrementByFive, onDecrementByFive }) => (
  <div>
    <h1>Value: {value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onIncrementByFive}>+5</button>
    <button onClick={onDecrement}>-</button>
    <button onClick={onDecrementByFive}>-5</button>
    <button onClick={onClear}>Clear</button>
  </div>
);

export default Counter;
