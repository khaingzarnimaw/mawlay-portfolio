import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="hidden md:block w-full bg-gray-100 text-slate-700 p-[10px] fixed top-0 z-10">
        <div className="flex justify-between w-[70%] mx-auto">
          <ul>
            <li className="">Maw Lay</li>
          </ul>
          <ul className=" flex gap-5">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#protfolio">Protfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
