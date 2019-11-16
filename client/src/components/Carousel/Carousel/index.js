import React from "react";
import CarouselImage from "../CarouselImage";
import Slider from "react-slick";
import 'bulma/css/bulma.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import studioArray from "./ImageArray.json";

var studioImages = studioArray.Images;

console.log(studioImages);

// var studioImages = [
//   "https://i.imgur.com/GYcvn1I.jpg",
//   "https://i.imgur.com/GYcvn1I.jpg",
//   "https://i.imgur.com/GYcvn1I.jpg"
// ];

class Carousel extends React.Component {

  render(){
    var settings = {
      autoplay: true,        
      autoplaySpeed: 3000,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      // slidesToScroll: 
    };
    return (
      <Slider {...settings}>
        {
          studioImages.map(image => {
            return(
            <div>
              <CarouselImage image={image.src}/>
            </div>
            )
          })
        }
      </Slider>
    );
  }
}
  
  export default Carousel;