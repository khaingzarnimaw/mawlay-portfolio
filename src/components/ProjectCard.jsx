import React from "react";
import Top from "../assets/img/top.png";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

const ProjectCard = ({ data }) => {
  return (
    <div>
      <img src={Top} alt="" />

      <div className="flex justify-between  items-center mt-2 ">
        <div className=" text-l font-bold">{data.title}</div>
        <span className="flex">
          <a href={data.githubUrl} target=" _black" >
            <AiFillGithub className=" text-3xl cursor-pointer hover:text-violet-500" />
          </a>
          <a href="">
            <AiOutlineArrowRight className="text-3xl cursor-pointer hover:text-violet-500" />
          </a>
        </span>
      </div>
      <div className="my-3 text-slate-700">
        { data.text.slice(0,100) } ... 
      </div>
      <div className="flex gap-3 text-xs ">
        {/* <div className=" bg-orange-500 px-4 rounded-md ">Html</div>
        <div className=" bg-blue-500 px-4 rounded-md ">Css</div>
        <div className=" bg-green-500 px-6 rounded-md">Javascript</div> */}
        {data.languages.map((language,index)=> (
          <div className="bg-slate-200 px-3 py-1" key={index}>{language}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
