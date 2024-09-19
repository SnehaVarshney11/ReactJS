const Button = (props) => {
  return <button onClick={props.handleClick}>Click Me</button>;
};

const App = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <Button handleClick={handleClick} />;
};
