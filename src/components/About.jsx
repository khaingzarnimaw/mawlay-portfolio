import React from "react";
import AboutImg from "../assets/img/About.png";
import Title from "./resources/Title";

const About = () => {
  return (
    <>
      <div className=" h-screen flex justify-center items-center ">
        <div className=" w-[70%] mx-auto">
          {/* <span className=" text-3xl font-bold underline"> About</span>
          <span className=" text-sm bg-slate-300 p-1 ml-2">Who am I</span> */}
          <Title title={"About"} setTitle={"Who am i"} />

          <div className="flex gap-10 ">
            {/* About Image */}
            <div className="basis-1/3">
              <img src={AboutImg} alt="" />
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
