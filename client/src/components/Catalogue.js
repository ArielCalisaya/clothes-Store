import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import MapPrenda from "./MapPrendas";

function Catalogue() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get("/api/clothes/all").then((res) => {
      console.log(res.data);
      if (res.data.result.length > 0) {
        setProduct(res.data.result);
      } else {
        console.log("Not have products for the moment");
      }
    });
  }, []);

  console.log(products);

  return (
    <div className="mtop-80px">
      <ul>
        <p> Fetched Products</p>
        {products.map((product) => (
          <Fragment key={product._id}>
            <MapPrenda prenda={product} />
            <br />
            <br />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
