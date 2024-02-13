import "./01_ReactProps.css";
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation

function ReactProps() {
  const name = "Sachin Kumar"; // Example of a string prop

  const handleClick = () => {
    alert('Button clicked By You!'); // Example of a function prop
  };

  const style = {
    color: 'blue',
    fontSize: '20px'
  };

  return (
    <div className="container">
      {/* Example of passing a string prop to the <h1> element */}
      <h1>Hello, {name}</h1>

      {/* Example of adding event handler prop to a button */}
      <button onClick={handleClick}>Click me!</button>

      {/* Example of passing an object prop to style an element */}
      <p style={style}>Styled paragraph</p>

      {/* Example of passing a boolean prop to conditionally render an element */}
      {true && <div>This will always render</div>}
      {false && <div>This will never render</div>}
      
      {/* Example of passing a number prop */}
      <p>My age is {25}</p>

      {/* Example of passing an array prop */}
      <ul>
        {[1, 2, 3].map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Example of passing a function as a child prop */}
      <ChildComponent>
        {() => <p>This is a function passed as a child prop</p>}
      </ChildComponent>
    </div>
  );
}

// Define prop type validation for the ChildComponent
ChildComponent.propTypes = {
    children: PropTypes.func.isRequired // ChildComponent expects a function as children prop and it's required
  };

// Example of a functional component to demonstrate passing a function as a child prop
function ChildComponent({ children }) {
  return (
    <div className="child-container">
      <h2>Child Component</h2>
      {children && children()}
    </div>
  );
}

export default ReactProps;
