import React from "react";
import Slider from "react-slick";
import NewProduct from "./NewProduct";

const NewProducts = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section margin-80">
      <div className="container">
        <h3> New Products </h3>
        <Slider {...settings}>
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
        </Slider>
      </div>
    </div>
  );
};

export default NewProducts;
