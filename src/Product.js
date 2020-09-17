import React from "react";
import { Link } from "react-router-dom";
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
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="product">
      <Link to={"/products/" + id}>
        <div className="product__info">
          <p>{truncate(title, 70)}</p>
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
      </Link>
      <div className="product__btns">
        <Link to={"/products/" + id}>
          <button className="product__btn btn__detail">
            View Product Details
          </button>
        </Link>
        <button className="product__btn btn__add" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
