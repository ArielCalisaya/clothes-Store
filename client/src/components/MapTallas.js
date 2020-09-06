import React from "react";

const MapTallas = (props) => {
  const { talla_S, talla_M, talla_L } = props;

  return (
    <div className="flex text-center list-none pb-6">
      <div className="flex-1 shadow p-1">
        <li>Talla: {talla_S.talla}</li>
        <li>{talla_S.cantidad}</li>
      </div>
      <div className="flex-1 shadow p-1">
        <li>Talla: {talla_M.talla}</li>
        <li>{talla_M.cantidad}</li>
      </div>
      <div className="flex-1 shadow p-1">
        <li>Talla: {talla_L.talla}</li>
        <li>{talla_L.cantidad}</li>
      </div>
    </div>
  );
};

export default MapTallas;
