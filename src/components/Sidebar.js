import { useState } from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { PiBankFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="sideDiv1">
      <div className="sideDiv2">
        <h1 className="logo">TL</h1>
      </div>
      <div className="sideDiv3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
          end
        >
          <AiFillPieChart className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/transaction"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <GrTransaction className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/secure"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <MdSecurity className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/stake"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <PiBankFill className="icon" />
        </NavLink>
        {/* <NavLink
          to="/dashboard/accounts"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <FaUser className="icon" />
        </NavLink> */}
      </div>
    </div>
  );
};

export default Sidebar;
