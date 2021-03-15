import React from "react";

const TopSellingItem = () => {
  return (
        <div className="products-widget-slick">
          <div className="product-widget">
            <div className="product-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                alt=""
              />
            </div>
            <div className="product-body">
              <p className="product-category">Category</p>
              <h3 className="product-name">
                <a href="#">product name goes here</a>
              </h3>
              <h4 className="product-price">
                $980.00 <del className="product-old-price">$990.00</del>
              </h4>
            </div>
          </div>
        </div>
  );
};

export default TopSellingItem;
