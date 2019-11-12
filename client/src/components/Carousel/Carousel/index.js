import React from "react";
import CarouselImage from "../CarouselImage";
import 'bulma/css/bulma.css'

var studioImages = [];

function Carousel({ children }) {
    return (
      <div>
          <ul className="carousel" style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>
            {
              studioImages.map(image => {
                return(
                  <CarouselImage image={image}/>
                )
              })
            }
          </ul>
        {children}
      </div>
    );
  }
  
  export default Carousel;