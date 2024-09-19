const Profile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

const App = () => {
  return <Profile name="Sneha Varshney" age={22} location="Gurugram" />;
};
