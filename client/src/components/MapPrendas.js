import React from "react";
import { Link } from "react-router-dom";
import imgExample from "../assets/Verde-Claro.jpg";
import MapTallas from "./MapTallas";

const MapPrendas = (props) => {
  const {
    prenda: { _id, tipo, color, precio, imagen, talla_S, talla_M, talla_L },
  } = props;

  return (
    <div className="w-full md:w-1/3 p-8 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
        <Link
          className=" w-full block text-center text-green-800 bg-green-200"
          to={`/ropa/${_id}`}
        >
          Id: {_id}
        </Link>
        <a href="/ropa" className="flex flex-wrap no-underline">
          <p className="w-full text-gray-800 text-center md:text-2xl px-6 py-4 md:py-2">
            {tipo} {color}
          </p>
          <div className="text-center m-auto bg-purple-700 w-full">
            <img src={imgExample} className="w-56 inline-block" alt={imagen} />
          </div>
        </a>
        <p className="text-xl text-center py-4">Disponible</p>
        <MapTallas
          className="bg-white"
          talla_S={talla_S}
          talla_M={talla_M}
          talla_L={talla_L}
          key={_id}
        />
        <div className=" shadow p-2">
          <p className="text-gray-800 text-center w-full text-xl px-6  my-3">
            Precio: {precio} CLP
          </p>
        </div>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-4">
        <div className="flex items-center justify-center">
          <button className="mx-auto lg:mx-0 hover:underline orange-gradient text-white font-bold rounded-full py-4 px-8 shadow-lg">
            Ver Mas
          </button>
        </div>
      </div>
    </div>
  );
};
export default MapPrendas;
