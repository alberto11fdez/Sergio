import React, {useState} from 'react'
import "../stylesheets/Navbar.css"
import Logo from '../Image/Logo.PNG'


function Navbar(){

    const [active, setActive] = useState("nav_menu");

    const [toggleIcon, setToggleIcon] = useState("nav_toggler");

      const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

        //TogglerIcon
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon("nav:toggler");
      }

  return (
    <nav className="nav">
      <img src={Logo} alt='' className="imgNav" href='#'></img>
      <ul className={active}>
          <li className="bav_item"><a href='#' className="nav_Link">Home</a></li>
          <li className="bav_item"><a href='#' className="nav_Link">About</a></li>
          <li className="bav_item"><a href='#' className="nav_Link">Skills</a></li>
          <li className="bav_item"><a href='#' className="nav_Link">PortaFolio</a></li>
          <li className="bav_item"><a href='#' className="nav_Link">Contact</a></li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;


