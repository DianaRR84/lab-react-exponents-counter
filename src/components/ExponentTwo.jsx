//To make the exponent components dynamic, modify them to accept the count as a prop and calculate the exponent values dynamically.

const ExponentTwo = ({ count }) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{count ** 2}</span></p>
  </div>
);

export default ExponentTwo;