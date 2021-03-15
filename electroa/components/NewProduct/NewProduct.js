import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NewProduct = () => {
  return (
    <div className="products-slick">
      <div className="product">
        <div className="product-img">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
          <div className="product-label">
            <span className="sale">-30%</span>
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name">
            <a href="#">product name goes here</a>
          </h3>
          <h4 className="product-price">
            $980.00 <del className="product-old-price">$990.00</del>
          </h4>
          <div className="product-rating"></div>
          <div className="product-btns">
            <button className="add-to-wishlist">
              <FontAwesomeIcon icon="heart" />
              <span className="tooltipp">add to wishlist</span>
            </button>
            <button className="add-to-compare">
              <FontAwesomeIcon icon="exchange-alt" />
              <span className="tooltipp">add to compare</span>
            </button>
            <button className="quick-view">
              <FontAwesomeIcon icon="eye" />
              <span className="tooltipp">quick view</span>
            </button>
          </div>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">
            <FontAwesomeIcon icon="shopping-cart" /> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
