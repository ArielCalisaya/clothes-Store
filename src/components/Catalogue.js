import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Prenda from "./Prenda";

function Catalogue() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = () => {
    const rimbaAPI = "/api/clothes";
    axios.get(rimbaAPI).then((res) => {
      const sendRes = res.data;
      setProduct(sendRes);
    });
  };

  console.log(...products);

  return (
    <div className="mtop-80px">
      <ul>
        <p> Fetched Products</p>
        {products.map((product) => (
          <Fragment key={product._id}>
            <Prenda prenda={product} />
            <br />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
