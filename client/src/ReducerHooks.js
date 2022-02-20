import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 5;
    case ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const ReducerHooks = () => {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 10);
  //   };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h5>{count}</h5>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Decrement
      </button>

      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment Value</button> */}
      {/* <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement Value</button> */}
    </>
  );
};

export default ReducerHooks;
