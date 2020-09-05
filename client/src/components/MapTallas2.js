import React from "react";

const MapTallas2 = (props) => {
  const { cantidad, talla } = props;

  return (
    <>
      <p>Tallas Disponibles</p>
      <div>
        <li>Talla: {talla}</li>
        <li>Disponible: {cantidad}</li>
      </div>
    </>
  );
};

export default MapTallas2;
