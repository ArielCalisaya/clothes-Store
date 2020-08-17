import React from "react";
import BGirl from '../assets/bg.jpg'

function home(){
  return (
    <div >
        <section>
        <div className="logo"> Creative</div>
        <img src={BGirl} alt="" className="bg" />
        <div className="content">
          <h2>
            let's make
            <br />
            somthing creative
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            quam quisquam accusamus. Porro ea, quam commodi animi mollitia, vero
            nemo aut cumque rem voluptas culpa id sequi tempora unde sint.
          </p>
          <p>Example form, try use Space key</p>
        <form action=""><input type="text"/></form>
          <a href="/"> Get Started</a>
        </div>
        <p className="copyrightText">©2020. Rimba's Clothes</p>
      </section>
    </div>
  );
};
export default home;
