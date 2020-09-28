import React from "react";
import { Link } from "react-router-dom";
import imgExample from "../assets/Verde-Claro.jpg";
import MapTallas from "./MapTallas";

const MapPrendas = (props) => {
  const {
    prenda: { _id, tipo, color, precio, imagen, talla_S, talla_M, talla_L },
  } = props;

  return (
    <div className="">
      <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
        <Link
          className="block w-full text-center text-green-800 bg-green-200 "
          to={`/ropa/${_id}`}
        >
          ID: {_id}
        </Link>
        <a href="/ropa" className="flex flex-wrap no-underline">
          <p className="w-full px-6 py-4 text-center text-gray-800 md:text-2xl md:py-2">
            {tipo} {color}
          </p>
          <div className="w-full m-auto text-center bg-purple-700">
            <img
              src={imgExample}
              className="inline-block w-56 image-content"
              alt={imagen}
            />
          </div>
        </a>
        <p className="py-4 text-xl text-center">Disponible</p>
        <MapTallas
          className="bg-white"
          talla_S={talla_S}
          talla_M={talla_M}
          talla_L={talla_L}
          key={_id}
        />
        <div className="p-2 shadow ">
          <p className="w-full px-6 my-3 text-lg text-center text-gray-800">
            Precio: {precio} CLP
          </p>
        </div>
      </div>
      <div className="flex-none p-4 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
      </div>
    </div>
  );
};
export default MapPrendas;
