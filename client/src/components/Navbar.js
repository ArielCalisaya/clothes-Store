import React, { Fragment, useState } from "react";
import FacebookIcon from "../assets/icons/facebook.png";
import TwitterIcon from "../assets/icons/twitter.png";
import EmailIcon from "../assets/icons/email.png";
import InstagramIcon from "../assets/icons/instagram.png";
import PressKey from "../functions/pressKey";

/* Hint: This component Provides an handle that opens 
the navbar with Space keyboar */

const Navbar = () => {
  const [isToggled, setToggled] = useState("");


  // ------------------------------------
  const handleEnter = () => {
    console.log("Enter key is pressed");
    switch (isToggled) {
      case "":
        return setToggled("active");
      default:
        return setToggled("");
    }
  };
  // Personal Handler
  // function (Keyboardname, handle)
  PressKey("Space", handleEnter);

  return (
    <Fragment>
      <div className={`menuToggle ${isToggled.toString()}`} />
      <div className={`navigation ${isToggled.toString()}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">clothes</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>
        <div className="socialBar">
          <ul>
            <li>
              <a href="/">
                <img src={FacebookIcon} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={TwitterIcon} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={InstagramIcon} alt="instagram" />
              </a>
            </li>
          </ul>
          <a href="mailto:example@gmail.com" className="emailBx">
            <img src={EmailIcon} alt="" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
