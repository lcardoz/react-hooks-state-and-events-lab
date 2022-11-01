import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {

  const [selectedCategory, setSelected] = useState("All")

  const handleChange = (e) => setSelected(e.target.value)

  let filteredItems = items
  if (selectedCategory !== "All") {
    filteredItems = items.filter(item => item.category === selectedCategory)
  } else {
    filteredItems = items
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
