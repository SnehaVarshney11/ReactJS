const Card = ({ children }) => {
  return <div>{children}</div>;
};

const CardHeader = ({ title }) => {
  return <h2>Card Header - {title}</h2>;
};

const CardBody = ({ content }) => {
  return <p>Card Body - {content}</p>;
};

const CardFooter = ({ footer }) => {
  return <h2>Card Footer - {footer}</h2>;
};

const App = () => {
  return (
    <Card>
      <CardHeader title="My Card" />
      <CardBody content="This is some Card content" />
      <CardFooter footer="Card Footer" />
    </Card>
  );
};
