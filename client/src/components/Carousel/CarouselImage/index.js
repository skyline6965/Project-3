import React from "react";
import "./style.css";

function CarouselImage(props){
  return (
    <div className="image-slide">
      <img src={props.image} alt="Joe's Studio"/>
    </div>
  )
}


export default CarouselImage;