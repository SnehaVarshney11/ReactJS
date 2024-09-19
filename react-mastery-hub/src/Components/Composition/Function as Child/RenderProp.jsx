const RenderPropComponent = ({ render }) => {
  return <div>{render()}</div>;
};

const App = () => {
  return (
    <RenderPropComponent
      render={() => (
        <>
          <h1>Dynamic Header</h1>
          <p>Some Dynamic Content</p>
        </>
      )}
    />
  );
};
