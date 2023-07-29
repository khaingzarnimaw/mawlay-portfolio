import React from 'react'
import {MdOutlineMenu} from "react-icons/md"
const NavBar = () => {

  const handleToggleSideBar = () => {
    setshowSideBar(!showSideBar);
    // console.log(showSideBar);
  };
  return (
    <>
      <nav className="hidden md:block w-full bg-gray-100 text-slate-700 p-[10px] fixed top-0 z-10" >
        <ul className="w-[70%] mx-auto flex justify-between">
          <li className="">
             <a href='' className=''>
              Maw Lay
             </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
