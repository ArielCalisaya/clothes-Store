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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="mtop-80px">
      <ul>
        <h1> Catalogo de Productos</h1>
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

// Stoped on min 2:06:17
// https://www.youtube.com/watch?v=Fy9SdZLBTOo&t=11995s