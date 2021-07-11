import React from 'react';
import './styles/HomeCarousel.css';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function HomeCarousel() {
    return (
      <Carousel
      className="home_carousel"
        axis="horizontal"
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        interval={5000}
        transitionTime={600}
        swipeScrollTolerance={5}
      >
        <div>
          <img className="home_carousel_img" src="./ama_prime.jpg" alt="image_slider_home" />
        </div>
        <div>
          <img className="home_carousel_img" src="./ama_fashion.jpg" alt="image_slider_home" />
        </div>
        <div>
          <img className="home_carousel_img" src="./ama_alexa.jpg" alt="image_slider_home" />
        </div>
      </Carousel>
    );
}

export default HomeCarousel

