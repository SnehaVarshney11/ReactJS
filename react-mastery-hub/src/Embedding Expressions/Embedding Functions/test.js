function getGreeting(name) {
  return `Hello, ${name}!`;
}

const name = "Sneha";
const element = <h1>{getGreeting(name)}</h1>;
