/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Proyecto2.css";

function CustomImage({ src }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <img
      src={src}
      className={`custom-image ${isHovering ? "enlarge" : ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    />
  );
}

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <CustomImage src="react-merstack-crud\src\component\images\marron.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <CustomImage src="react-merstack-crud\src\component\images\violeta.webp" />
      </Carousel.Item>
      <Carousel.Item>
        <CustomImage src="react-merstack-crud\src\component\images\violeta123.jpg" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
