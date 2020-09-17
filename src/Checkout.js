import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProuduct from "./CheckoutProuduct";
import Subtotal from "./Subtotal";
import ad from "./images/banner-ad.png";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__banner" src={ad} alt="" />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. to buy one or more items,
              <br /> click "Add to Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <div className="checkout__contents">
              <FlipMove>
                {basket?.map((item, i) => (
                  <CheckoutProuduct
                    key={item.price * item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    index={basket.indexOf(item)}
                  />
                ))}
              </FlipMove>
            </div>
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
