import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProuduct = forwardRef(
  ({ id, title, price, image, rating, hideButton, index }, ref) => {
    const [, dispatch] = useStateValue();
    const removeFromBasket = () => {
      //REMOVING ITEM FROM BASKET
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id,
      });
    };
    return (
      <div className="checkoutProduct" ref={ref}>
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <small>₹</small>
          <strong>{price}</strong>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/star_2b50.png"
                  alt=""
                />
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProuduct;
