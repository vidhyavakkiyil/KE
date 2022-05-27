import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function PrductDetails() {
  const params = useParams();
  console.log(params.productid);
  return (
    <div className="products_detail">
      PODUCT DETAILS
      {data.products.map((product) =>
        product.slug == params.productid ? (
          <div className="product" key={product.slug}>
            <div className="product_detail_img">
              <img src={product.image} alt=""></img>
            </div>
            <div className="product_detail_text">
              <p>{product.name}</p>
              <p>
                <strong>$</strong>
                {product.price}
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )
      )}
    </div>
  );
}

export default PrductDetails;
