import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="flex items-center w-screen justify-between px-[10.69rem] h-full text-[1.25rem] font-medium pt-[1.19rem] pb-[1.75rem] ">
      <img
        src={logo}
        alt="harbest's logo"
        className="w-[5.81rem] h-[4.06rem] "
      />
      <nav className="gap-[3.12rem] flex items-center">
        <ul className="flex items-center gap-[3.12rem] ">
          <li>
            <Link to="/planting-season">Planting Season</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
        </ul>
        <button className="bg-[#408D03] text-white w-[12.43rem] h-[2.75rem] rounded-[0.312rem] text-[1.25rem] font-medium ">
          Get report
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
