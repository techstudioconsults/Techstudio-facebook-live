import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <header className="cc-container navbar-header">
        <div>
          <img
            src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218525/techstudio-web-app/assets/images/logo_white_text_new_2_fmjlzq.png"
            alt=""
           
          />
        </div>
        <div>
          <NavLink to={`/register`}>
            <button className="navbar-btn">Register Now</button>
          </NavLink>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
