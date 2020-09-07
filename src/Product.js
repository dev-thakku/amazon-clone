import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/star_2b50.png"
                alt=""
              />
            ))}
        </div>
      </div>
      <img className="product__img" src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
