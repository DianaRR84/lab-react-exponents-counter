import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";


function App () {
  // Lifted state: count
  const [count, setCount] = useState(1);

  // Handlers to increment and decrement count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      {/* Pass count and handlers to Counter */}
      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {/* Pass count to all exponent components */}
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />

        {/* Bonus iteration
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />*/}
      </div>
    </div>
  );
}

export default App;
