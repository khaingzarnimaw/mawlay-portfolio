import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiReact,SiTailwindcss } from "react-icons/si";

const Skill = () => {
  return (
    <div className="skill text-white flex justify-center items-center flex-col ">
      <div className="my-1 md:my-5">
        <span className="italic font-bold text-xl ">~ Skill ~</span>
      </div>
      <ul className="flex flex-col md:flex-row text-xs md:text-lg md:gap-10 gap-2 ">
        <li>
          <div className="flex gap-1 items-center ">
            <AiFillHtml5 className="text-2xl"/>
            Html
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center ">
            <IoLogoCss3 className="text-2xl"/>
            Css
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center ">
            <IoLogoJavascript className="text-2xl"/>
            Javascript
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center">
          <SiTailwindcss className="text-2xl"/>
            Tailwind</div>
        </li>
        <li>
          <div className="flex gap-1 items-center ">
            <SiReact className="text-2xl"/>
            React
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skill;
