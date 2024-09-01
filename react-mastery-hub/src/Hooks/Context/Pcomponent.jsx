import React from 'react';
import ChildComponent from './Ccomponent';
import MyContext from './context';

const ParentComponent = () => {
  const value = 'Hello from Context!';

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

export default ParentComponent;