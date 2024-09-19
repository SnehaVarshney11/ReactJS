const withBorder = (WrappedComponent) => {
  return (props) => (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <WrappedComponent {...props} />
    </div>
  );
};

const SimpleComponent = () => <p>This is a Simple Component</p>;

const EnhancedComponent = withBorder(SimpleComponent);

const App = () => {
  return <EnhancedComponent />;
};
