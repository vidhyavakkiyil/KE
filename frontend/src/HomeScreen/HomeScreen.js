import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../data";
import PrductDetails from "../PrductDetails/PrductDetails";

function HomeScreen() {
  const [product, setproduct] = useState([]);

  const fetchdata = async () => {
    const result = await axios.get("/api/seed");
    console.log(result);
    setproduct(result.data.CreateProduct);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(product);
  console.log(data.products);
  return (
    <div className="product_item">
      PODUCT LIST
      {product.map((value) => (
        <div className="product" key={value.slug}>
          <a href={`/product/${value.slug}`}>
            <img src={value.image} alt=""></img>
          </a>
          <div className="product_text">
            <a href={`/product/${value.slug}`}>
              <p>{value.name}</p>
            </a>
            <p>
              <strong>$</strong>
              {value.price}
            </p>

            <button>ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;
