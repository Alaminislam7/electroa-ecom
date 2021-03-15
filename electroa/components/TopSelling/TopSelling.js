import React from "react";
import Slider from "react-slick";
import TopSellingItem from "./TopSellingItem";

const TopSelling = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#bcbfb1",
          top: "-9%",
          margin: "0px 5px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#bcbfb1",
          top: "-9%",
          margin: "0px -5px",
          left: "90%"
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="container">
      <h3> Top Selling </h3>
      <Slider {...settings}>
        <TopSellingItem />
        <TopSellingItem />
        <TopSellingItem />
        <TopSellingItem />
        <TopSellingItem />
        <TopSellingItem />
        <TopSellingItem />
      </Slider>
    </div>
  );
};

export default TopSelling;
