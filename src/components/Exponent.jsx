//To refactor the Exponent components into a single reusable component, we’ll create a new Exponent component that accepts the base number (num) and the exponent (exponent) as props. This component will dynamically calculate and display the result based on these props.

const Exponent = ({ num, exponent }) => {
    const result = Math.pow(num, exponent);
  
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">n^{exponent}</p>
        <p className="exponent-result">
          {Array(exponent)
            .fill(num)
            .join(" * ")} = <span className="total">{result}</span>
        </p>
      </div>
    );
  };
  
  export default Exponent;
  