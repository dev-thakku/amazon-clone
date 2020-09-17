import React from "react";
import { useParams } from "react-router-dom";
import ReadMoreAndLess from "react-read-more-less";
import data from "./data";
import "./ProductDetail.css";
import ImageSlider from "./ImageSlider";

function ProductDetail() {
  const { id } = useParams();
  console.log("product ID is>>>>>>>", id);
  console.log(data.products);
  const product = data.products.find((x) => x.uid == id);
  console.log("product  is>>>>>>>", product);

  return (
    <div className="productDetail">
      <div className="productDetail__top">
        <div className="productDetail__imgSection">
          <ImageSlider image={product.image} />
          {/* <img src={product.image} alt="" className="imgSection__img" /> */}
        </div>
        <div className="productDetail__info">
          <h1 className="info__title">{product.title}</h1>
          <p className="info__brand">Brand: {product.brand}</p>
          <p className="info__price">
            <small>₹</small>
            <strong>{product.price}</strong>
          </p>
          <div className="info__rating">
            {Array(product.rating)
              .fill()
              .map((_) => (
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/star_2b50.png"
                  alt=""
                />
              ))}
          </div>
          <div>
            <button className="productDetail__btn"> Add to Cart </button>
          </div>
          <div className="bullets">
            {product.details?.map((detail) => (
              <ul>
                <li>{detail}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="productDetail__bottom">
        <div className="desc">
          <h3 className="desc__head">Product Description</h3>
          <div className="info__desc">
            <ReadMoreAndLess
              className="info__desc"
              charLimit={450}
              readMoreText="Read more"
              readLessText="Read less"
            >
              {product.desc}
            </ReadMoreAndLess>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
