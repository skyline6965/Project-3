import React from "react";
import "./style.css";

function CarouselImage(props){
  return (
    <div>
      <img src={props.image} alt="Joe's Studio"/>
    </div>
  )
}


export default CarouselImage;