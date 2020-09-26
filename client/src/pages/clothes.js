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
  }, [dispatch]);
  
  if (!products) {
    return null;
  }

  console.log(products);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container flex flex-wrap mx-auto md:padding-nav-size">
        <h1 className="w-full my-6 text-5xl font-bold leading-tight text-center text-white">
          Catalogo de Prendas
        </h1>
        <div className="w-full clothes-container contents">
        {products.map((product) => (
          <Fragment key={product._id}>
            <MapPrendas prenda={product} />
          </Fragment>
        ))}
        </div>
      </div>
  );
}

export default Clothes;


