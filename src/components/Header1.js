import React, { useState } from "react";
import "../styles/Header1.css";
import { NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import MobileMenuModal from "./MobileMenuModal";
import logo from "../images/logo.png";

const Header1 = ({ clicked, setClicked }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModal, setProfile] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Profile = () => {
    setProfile(!profileModal);
  };

  return (
    <div className="head1Div1">
      <div className="logoDiv">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 className="logoName">Sentinel</h1>
        </NavLink>
      </div>

      <div className="navList">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> About</h3>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Terms </h3>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Privacy</h3>
        </NavLink>
      </div>

      <div className="authLinks">
        <NavLink to="/login" className="signBtn">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header1;
