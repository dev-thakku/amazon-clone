import React from "react";
import data from "./data";
import banner from "./images/banner1.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img className="home__banner" src={banner} alt="" />
      </div>

      <div className="home__row">
        {data.products.map((product) => (
          <div>
            <Product
              id={product.uid}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
