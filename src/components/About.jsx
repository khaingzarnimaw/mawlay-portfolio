import React from "react";
import AboutImg from "../assets/img/About.png";

const About = () => {
  return (
    <>
      <div className="  w-[70%] mx-auto h-screen justify-center flex flex-col">

        <div className=" mb-5">
          <span className=" text-3xl font-bold underline"> About</span>
          <span className=" text-sm bg-slate-300 p-1 ml-2">Who am I</span>
        </div>
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
              <p className="my-5 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia quam ducimus provident, unde voluptate culpa laborum
                illum illo exercitationem, mollitia numquam magni ea aspernatur
                esse iusto eveniet non repudiandae voluptates!
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
