import React from "react";

import banner from "./images/banner1.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home__banner" src={banner} alt="" />

      <div className="home__row">
        <Product
          id="12321341"
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
          price={3400}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
          }
        />
        <Product
          id="12321342"
          title="Fire TV Stick 4K with All-New Alexa Voice Remote | Streaming Media Player"
          price={5999}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51FWoUi2uiL._SL1000_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id="12321344"
          title="As a Man Thinketh Paperback – 6 November 2017"
          price={149}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41YKHJHBV3L._SX321_BO1,204,203,200_.jpg"
          }
        />
        <Product
          id="12321345"
          title="Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 64GB) - Space Gray"
          price={65999}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61h6BDl1nTL._AC_SL1500_.jpg"
          }
        />
        <Product
          id="12321346"
          title=" Apple AirPods Pro"
          price={21349}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="Acer Nitro VG270P IPS 27 inch Gaming Monitor - 1 MS - 144 Hz - Full HD Resolution - 400 Nits - 2XHDMI 1X Display Port - Free Sync - VG270P (Black)"
          price={19960}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61Vddza8BrL._SL1336_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
