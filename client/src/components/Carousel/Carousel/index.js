import React from "react";
import CarouselImage from "../CarouselImage";
import Slider from "react-slick";
import 'bulma/css/bulma.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var studioImages = [
  "https://i.imgur.com/GYcvn1I.jpg",
  "https://i.imgur.com/GYcvn1I.jpg",
  "https://i.imgur.com/GYcvn1I.jpg"
];

class Carousel extends React.Component {

  render(){
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {
          studioImages.map(image => {
            return(
            <div>
              <CarouselImage image={image}/>
            </div>
            )
          })
        }
      </Slider>
    );
  }
}
  
  export default Carousel;