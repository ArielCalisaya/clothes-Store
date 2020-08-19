import React from "react";
import BGirl from '../assets/bg.jpg'

function home(){
  return (
    <div >
        <section>
        <div className="logo">Rimba</div>
        <img src={BGirl} alt="" className="bg" />
        <div className="content">
          <h2>
            Ropa con
            <br />
            Telas de calidad
          </h2>
          <p>
            En Confecciones Rimba, con mas de 20 años en el mercado decidimos dar un paso mas 
            en la venta de ropa confeccionada con telas nacionales de calidad. 
            </p>
            <hr/>
            <p>
            Aquí podras encontrar desde polerones de algodon hasta pantalones y varios tipos de telas.
          </p>
          
        </div>
        <p className="copyrightText">©2020. Rimba's Clothes</p>
      </section>
    </div>
  );
};
export default home;
