import React from "react";
import Topimage from "../assets/img/top.png";
import "../assets/css/button89.css";
import { FaFacebook, FaTelegram, FaGithub } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Typewriter from "typewriter-effect";

const Top = () => {
  return (
    // <div className='h-screen'  style={{background:`url(${Topimage})`}} >
    <div
      className="h-screen flex justify-center items-center relative top "
      // id="top"
    >
      <div className="text-center">
        <div className="text-2xl md:text-4xl font-bold text-white mb-3">
          <Typewriter
            options={{
              strings: [
                "Hi there!",
                "I'm Khaing Zar Ni Maw",
                "I'm Web Developer",
                "I'm very hard worker",
                "カイン　ザー　ニ　モー　",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className=" text-white mb-8">Welcome to my site</div>

        {/* <a   href="https://drive.google.com/file/d/1vxy-NrF1r2RFlQXHesH6-cFNP1fyQq2x/view?usp=drive_link"  > */}
        {/* <a href="/KhaigZarNiMaw.pdf"> */}
        <a href="/Khaing.pdf">
          <div className="button-89 " role="button" target="_blank">
            Download CV
          </div>
        </a>

        <div>
          <a href="#about">
            <span className=" flex-col gap-1 absolute bottom-2">
              <BsMouse
                className="text-3xl text-white  animate__animated animate-bounce animate__infinite infinite animate__slower 3s "
                target="_blank"
              />
              <RiArrowDropDownLine className="text-3xl text-white" />
            </span>
          </a>
        </div>

        <div className="md:absolute left-10 bottom-[35%] mt-5">
          <ul className="flex justify-center md:flex-col  gap-5">
            <a href="https://www.facebook.com/profile.php?id=100024764383626">
              <li>
                <FaFacebook
                  className="text-xl text-white shadow-sm cursor-pointer"
                  target="_blank"
                />
              </li>
            </a>

            <a href="https://t.me/khaingzarnimaw">
              <li>
                <FaTelegram
                  className="text-xl text-white shadow-sm cursor-pointer"
                  target="_blank"
                />
              </li>
            </a>
            <a href="https://github.com/khaingzarnimaw">
              <li>
                <FaGithub
                  className="text-xl text-white shadow-sm cursor-pointer"
                  target="_blank"
                />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Top;
