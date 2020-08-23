import React, { useEffect, Fragment } from "react";
import MapPrenda from "../components/MapPrendas";
import { useSelector, useDispatch } from "react-redux";
import { clothesList } from "../redux/actions/clothesAction";

function Clothes(props) {
  const productList = useSelector((state) => state.clothesList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clothesList());
    return () => {
      //
    }
  }, []);
  console.log(products)

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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

export default Clothes;
