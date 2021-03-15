import React from "react";
import CollectionProduct from "./CollectionProduct";

const CollectionProducts = () => {
  return (
    <div className="section margin-80">
      <div className="container">
        <div className="row">
          <CollectionProduct />
          <CollectionProduct />
          <CollectionProduct />
        </div>
      </div>
    </div>
  );
};

export default CollectionProducts;
