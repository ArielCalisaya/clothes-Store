import React, { useEffect } from "react";
import MapPrendas from "../components/MapPrendas";
import { useSelector, useDispatch } from "react-redux";
import { clothesList } from "../redux/actions/clothesAction";
import { AnimatePresence, motion } from "framer-motion";
// import {AnimatePresence} from 'framer-motion'

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
        <AnimatePresence>
          {products.map((product, i) => (
            <motion.div
            className="flex flex-col flex-grow flex-shrink w-full p-8 md:w-1/3"
              variants={{
                hidden: {
                  opacity: 0,
                  y: -10
                },
                visible: (i) => ({
                  opacity: 1,
                  y:0,
                  transition: {
                    delay: i * 0.3,
                  },
                }),
              }}
              initial="hidden"
              custom={i}
              animate="visible"
              key={product._id}
            >
              <MapPrendas prenda={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Clothes;

// Stoped on min 2:07:15
// https://www.youtube.com/watch?v=Fy9SdZLBTOo&t=11995s
