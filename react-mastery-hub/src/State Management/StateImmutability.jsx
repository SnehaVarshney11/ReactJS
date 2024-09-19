import React, { useState } from "react";

const ItemList = () => {
  // Initialize state with an empty array
  const [items, setItems] = useState([]);

  // Function to add a new item to the list
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;

    // Use spread operator to create a new array with the added item
    setItems([...items, newItem]);
  };

  // Function to remove the last item from the list
  const removeItem = () => {
    // Use slice to create a new array without the last item
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
    </div>
  );
};

export default ItemList;
