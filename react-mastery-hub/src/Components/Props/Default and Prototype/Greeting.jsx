import PropTypes from "prop-types";

const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
};

Greeting.defaultProps = {
  name: "Guest",
  age: 21,
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

const App = () => {
  return <Greeting name="Sneha" age={25} />;
};
