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
  if (!products) {
    return null;
  }

  console.log(products);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container mx-auto flex flex-wrap pb-12 padding-nav-size">
        <h1 className="w-full my-6 text-5xl font-bold leading-tight text-center text-white">
          Catalogo de Prendas
        </h1>
        {products.map((product) => (
          <Fragment key={product._id}>
            <MapPrendas prenda={product} />
          </Fragment>
        ))}
      </div>
  );
}

export default Clothes;

// Stoped on min 2:07:15
// https://www.youtube.com/watch?v=Fy9SdZLBTOo&t=11995s
