import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProuduct from "./CheckoutProuduct";
import Subtotal from "./Subtotal";
import ad from "./images/banner-ad.png";

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
              You have no items in your basket. to buy one or more items, click
              "Add to Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProuduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
