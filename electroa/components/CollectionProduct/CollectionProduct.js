import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CollectionProduct = () => {
  return (
    <div className="col-md-4 col-xs-6">
      <div className="shop">
        <div className="shop-img">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="shop-body">
          {/* <h3>Laptop<br>Collection</h3> */}
          <a href="#" className="cta-btn">
            Shop now <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollectionProduct;
