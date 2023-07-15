import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/artist1.jpg";
import Img2 from "../../assets/artist2.jpg";
import Img3 from "../../assets/artist3.jpg";
import "./Carousel.css";

function CarouselComp() {
  return (
    <div className="carousel_container">
      <Carousel autoPlay interval={3000} infiniteLoop>
        <div>
          <div className="img__holder">
            <img src={Img1} />
          </div>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <div className="img__holder">
            <img src={Img2} />
          </div>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <div className="img__holder">
            <img src={Img3} />
          </div>
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
