import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import data from "./data";

import "./ImageSlider.css";

function ImageSlider({ image }) {
  return (
    <div>
      <Carousel showArrows={false} showThumbs={true}>
        {image.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
