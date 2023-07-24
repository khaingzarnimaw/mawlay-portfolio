import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import {IoMdContact} from "react-icons/io";
import {MdComputer,MdOutlineContactPhone} from "react-icons/md"

const NavBar = () => {
  const [showSideBar, setshowSideBar] = useState(false);

  const handleToggleSideBar = () => {
    setshowSideBar(!showSideBar);
    // console.log(showSideBar);
  };
  return (
    <>
      <nav className="hidden md:block w-full bg-gray-100 text-slate-700 p-[10px] fixed top-0 z-10">

        <ul className="w-[70%] mx-auto flex justify-between">
          <li className=" text-xl font-semibold">Maw</li>
          <li className="cursor-pointer" onClick={handleToggleSideBar}> 
            <MdOutlineMenu className=" text-3xl" />
          </li>
        </ul>
      </nav>
      {/* SlidBar */}
       
     { showSideBar &&   (
      <div className="animate__animated animate__fadeInRight fixed bottom-[5%] right-3 z-50 w-[50px] bg-gray-200 shadow-sm rounded-xl border-slate-400 border-e-0 ">
        <ul className="text-slate-500  py-5 px-3 flex flex-col justify-center items-center gap-4">
          <li>
            <a href="#about" className=" text-2xl " ><IoMdContact/></a>
          </li>
          <li>
           <a href="#portfolio" className=" text-2xl"><MdComputer/></a>
          </li>
          <li>
           <a href="#contant" className=" text-2xl"><MdOutlineContactPhone/></a>
          </li>
        </ul>
      </div>
    )}
    </>
  );
};

export default NavBar;
