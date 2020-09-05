import React from "react";
import { Link } from "react-router-dom";
import MapTallas from "./MapTallas";

const MapPrendas = (props) => {
  const {
    prenda: { _id, tipo, color, precio, imagen, talla_S, talla_M, talla_L },
  } = props;

  return (
    <div className="textWhite">
      <li className="link-style123">
        <Link to={`/ropa/${_id}`}>Id: {_id}</Link>
      </li>
      <li>Color: {color}</li>
      <li>Imagen: {imagen}</li>
      <li>Tipo: {tipo}</li>
      <li>Precio: {precio}</li>
      <MapTallas
        talla_S={talla_S}
        talla_M={talla_M}
        talla_L={talla_L}
        key={_id}
      />
    </div>
  );
};
export default MapPrendas;
