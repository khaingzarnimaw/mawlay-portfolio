import React from "react";
import AboutImg from "../assets/img/About.png";
import Title from "./resources/Title";

const About = () => {
  return (
    <>
      <div className=" flex md:justify-center justify-start items-center my-20">
        <div className=" w-[70%] mx-auto  ">
          {/* <span className=" text-3xl font-b10old underline"> About</span>
          <span className=" text-sm bg-slate-300 p-1 ml-2">Who am I</span> */}
          <Title title={"About Me"} setTitle={"Who am i"} />

          <div className="flex gap-10 flex-col md:flex-row ">
            {/* About Image */}
            <div className="basis-1/3">
              <img className ="w-[80%] md:w-[100%] rounded-sm shadow-sm "src={AboutImg}  alt="" />
              <div className="relative">
                <div className="flex justify-center items-center text-white text-xl bg-red-500 w-28 h-28 rounded-full opacity-80 absolute -bottom-10 -left-10 ">27歳</div>
                <div className="absolute bg-red-500 w-16 h-16 rounded-full opacity-80 bottom-8 left-3"></div>
              </div>
            </div>

            {/* Information */}
            <div className="basis-2/3">
              <div className="text-2xl font-bold">
                I'm Khaing Zar Ni Maw
                <div />
              </div>
              <p className="my-5 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia quam ducimus provident, unde voluptate culpa laborum
                illum illo exercitationem, mollitia numquam magni ea aspernatur
                esse iusto eveniet non repudiandae voluptates!
              </p>
              

              {/* <div className=" cursor-pointer  bg-orange-300 px-3 py-3 inline text-white shadow-sw " >More about me</div> */}
              {/* လိုလဲရေးလို့ ရပါတယ် */}
              {/* button52 */}
              <button class="button-52" role="button">
                More About Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
