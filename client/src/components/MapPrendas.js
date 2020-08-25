import React from "react";
import MapTallas from "./MapTallas";

const MapPrenda = (props) => {
  const {
    prenda: {
      _id,
      tipo,
      color,
      precio,
      imagen,
      img_sides,
      talla_S,
      talla_M,
      talla_L,
    },
  } = props;

  return (
    <>
      <li>Id: {_id}</li>
      <li>Color: {color}</li>
      <li>Imagen: {imagen}</li>
      <li>
        Imagen Lados:
        {img_sides.map((img) => (
          <p>
            Lado Derecho:{img.img_R} <br />
            Lado Izquierdo: {img.img_L}
          </p>
        ))}
      </li>
      <li>Tipo: {tipo}</li>
      <li>Precio: {precio}</li>
      <MapTallas
        talla_S={talla_S}
        talla_M={talla_M}
        talla_L={talla_L}
        key={_id}
      />
    </>
  );
};
export default MapPrenda;
