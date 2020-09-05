import React, { useEffect, Fragment } from "react";
import MapPrendas from "../components/MapPrendas";
import { useSelector, useDispatch } from "react-redux";
import { clothesList } from "../redux/actions/clothesAction";

function Clothes() {
  const productList = useSelector((state) => state.clothesList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clothesList());
    return () => {
      //
    };
  }, []);
  console.log(products);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="mtop-80px">
      <button className="btn btn-blue btn-blue:hover">Botón</button>
      <ul>
        <h1> Catalogo de Productos</h1>
        {products.map((product) => (
          <Fragment key={product._id}>
            <MapPrendas prenda={product} />
            <br />
            <br />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Clothes;

// Stoped on min 2:07:15
// https://www.youtube.com/watch?v=Fy9SdZLBTOo&t=11995s