import React, { Fragment, useState } from "react";
import FacebookIcon from "../assets/icons/facebook.png";
import TwitterIcon from "../assets/icons/twitter.png";
import EmailIcon from "../assets/icons/email.png";
import InstagramIcon from "../assets/icons/instagram.png";
import PressKey from "../utils/pressKey";
import { Link } from "react-router-dom";

/* Hint: PressKey component Provides an handle that opens 
the navbar with Space keyboard */

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
  // Warning: When using space on form
  // TODO: Find and learn for a usefull solution
  //Working with it
  PressKey("Space", handleEnter);

  return (
    <Fragment>
      <div className={`menuToggle ${isToggled}`} onClick={handleEnter} />
      <div className={`navigation ${isToggled}`} onClick={handleEnter}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/ropa">Ropa</Link>
          </li>
          <li>
            <Link href="/">clothes</Link>
          </li>
          <li>
            <Link href="/signin">Account</Link>
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
