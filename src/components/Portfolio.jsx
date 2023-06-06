import React from "react";
import Top from "../assets/img/top.png";
const Portfolio = () => {
  return (
    <div className="w-[70%] mx-auto">
      <div className="mb-5">
        <span className="text-2xl font-bold underline ">Portfolio</span>
        <span className="text-xs bg-slate-300 p-1 ml-2 ">work do so far</span>
      </div>

      <div className="flex gap-3 ">
        <div className="basis-1/3">
          <img src={Top} alt="" />

          <div className="flex justify-between mt-2">
            <div className=" text-l font-bold">Khaing</div>
            <div>icon</div>
          </div>
          <div className="my-3 text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
            explicabo quia vero aspernatur sunt provident. Porro minima aliquid
            exercitationem, tenetur aliquam repellat esse eos non atque.
            Corrupti, tempora nostrum?
          </div>
          <div className="flex gap-3 text-xs ">
            <div className=" bg-orange-500 px-4 rounded-md ">Html</div>
            <div className=" bg-blue-500 px-4 rounded-md ">Css</div>
            <div className=" bg-green-500 px-6 rounded-md">Javascript</div>
          </div>
        </div>

        <div className="basis-1/3">keke2</div>
        <div className="basis-1/3">keke3</div>
      </div>
    </div>
  );
};

export default Portfolio;
