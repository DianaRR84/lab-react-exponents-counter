import { useState } from "react";

//To ensure that all components share the same count value, we need to remove the local count state from Counter.jsx and use the state passed as props from App.jsx.
const Counter = ({ count, increment, decrement }) => {
  //const [count, setCount] = useState(0);

  //const decrement = () => setCount((prevCount) => prevCount - 1);
  //const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
