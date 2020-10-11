import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import MapTallas2 from "../components/MapTallas2";
import { detailsProduct } from "../redux/actions/clothesAction";

const ProductDetails = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    let id = props.match.params.id;
    dispatch(detailsProduct(id));
    return () => {
      //
    };
  }, [dispatch, props.match.params.id]);

  if (!product) {
    return null;
  }

  console.log(product);
  return (
    <div className="textWhite">
      <div className="link-style123">
        <Link to="/ropa">Volver</Link>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div>
            <p>img-url: {product.imagen}</p>
          </div>
          <div>
            <ul>
              <li>
                <h4>{product.tipo}</h4>
              </li>
              <li>
                <h4>{product.color}</h4>
              </li>
              <li>
                <h4>{product.precio}</h4>
              </li>
            </ul>
            <ul>
              <li>
                <h4>Tallas: Proximamente</h4>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;

// 2:20:30
