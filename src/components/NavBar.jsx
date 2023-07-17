import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const NavBar = () => {
  const [showSideBar, setshowSideBar] = useState(false);

  const handleToggleSiderBar = () => {
    setshowSideBar(!showSideBar);
  };

  return (
    <>
      <nav className="hidden md:block w-full bg-gray-100 text-slate-700 p-[10px] fixed top-0 z-10">
        <ul className="w-[70%] mx-auto flex justify-between">
          <li className="">Maw Lay</li>
          <li className=" cursor-pointer" onClick={handleToggleSiderBar}>
            <MdOutlineMenu className=" text-2xl" />
          </li>
        </ul>
      </nav>

      {/* SideBar */}
      {showSideBar && (
        <div className="animate__animated animate__bounce fixed bottom-[30%] right-0 z-50 w-[80px]  bg-gray-100 shadow-sm border border-slate-400  border-e-0">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Pro</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
