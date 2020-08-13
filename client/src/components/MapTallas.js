import React from "react";

const MapTallas = (props) => {
  const { talla_S, talla_M, talla_L } = props;

  return (
    <>
      <p>Tallas Disponibles</p>
      <div>
        <li>Talla: {talla_S.talla}</li>
        <li>Disponible: {talla_S.cantidad}</li>
      </div>
      <div>
        <li>Talla: {talla_M.talla}</li>
        <li>Disponible: {talla_M.cantidad}</li>
      </div>
      <div>
        <li>Talla: {talla_L.talla}</li>
        <li>Disponible: {talla_L.cantidad}</li>
      </div>
    </>
  );
};

export default MapTallas;
