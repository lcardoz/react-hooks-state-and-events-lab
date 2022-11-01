import React from "react";
import {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const liClass = inCart ? "in-cart" : ""
  const buttonClass = inCart ? "remove" : "add"
  const buttonText = !inCart ? "Add to Cart" : "Remove from Cart"

  const handleClick = () => setInCart(!inCart)

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
