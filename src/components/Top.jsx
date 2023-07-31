import React from "react";
import "../assets/css/button89.css";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Top = () => {

  const handleDownloadPDF = () => {
    l
  }

  return (
    // <div className='h-screen'  style={{background:`url(${Topimage})`}} >
    <div
      className="h-screen flex justify-center items-center relative top "
    // id="top"
    >
      <div className="text-center">
        <div className="text-2xl md:text-4xl font-bold text-white mb-3">
          Khaing Zar Ni Maw
        </div>
        <div className=" text-white mb-8">Welcome to my site</div>
        <a role="button" className="button-89" href="../src/assets/pdf/KhaigZarNiMaw.pdf" target="_black"  download >
          Download CV
        </a>
        <div>
          <span className=" flex-col gap-1 absolute bottom-2">

            <BsMouse className="text-3xl text-white  animate__animated animate-bounce animate__infinite infinite animate__slower	3s " />
            <RiArrowDropDownLine className="text-3xl text-white" />
          </span>
        </div>

        <div className="md:absolute left-10 bottom-[35%] mt-5">
          <ul className="flex justify-center md:flex-col  gap-5">
            <li>

              <FaFacebook className="text-xl text-white shadow-sm cursor-pointer" />
            </li>
            <li>
              <FaInstagram className="text-xl text-white shadow-sm cursor-pointer" />
            </li>
            <li>
              <FaGithub className="text-xl text-white shadow-sm cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Top;
