import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="hidden md:block w-full bg-gray-100 text-slate-700 p-[10px] fixed top-0 z-10">
        <ul className="w-[70%] mx-auto flex justify-between">
          <li className="">Maw Lay</li>
          <li className="">
            <MdOutlineMenu className=" text-3xl" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
