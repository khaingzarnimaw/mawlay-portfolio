import React, { useState } from "react";
import AboutImg from "../assets/img/About.png";
import Title from "./resources/Title";
import { RiCloseLine } from "react-icons/ri";
import PowerImg from "../assets/img/Power.png";
import "../assets/css/scrollbar.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
// import "../../src/assets/css/cardswiper.css"

const About = () => {
  const [modelStatus, setModelStatus] = useState(false); //modelStatus

  const handleOpenModel = () => {
    setModelStatus(true);
    document.body.style.overflow = "hidden"; //scoll
  };

  const handleCloseModel = () => {
    setModelStatus(false);
    document.body.style.overflow = "auto";
  };

  const cardsData = [
    {
      image:"../../src/assets/img/Power.png",
      title: "Card 1",
    },
    {
      image: "../../src/assets/img/Power.png",
      title: "Card 2",
    },
    {
      image: "../../src/assets/img/Power.png",
      title: "Card 3",
    },
    {
      image: "../../src/assets/img/Power.png",
      title: "Card 4",
    },
    {
      image: "../../src/assets/img/Power.png",
      title: "Card 5",
    },
  ];

  

  return (
    <>
      <div
        className=" flex md:justify-center justify-start items-center my-5 md:h-screen md:my-0 gap-5 "
        id="about"
      >
        <div className=" w-[70%] mx-auto  ">
          {/* <span className=" text-3xl font-b10old underline"> About</span>
          <span className=" text-sm bg-slate-300 p-1 ml-2">Who am I</span> */}
          <Title title={"About Me"} setTitle={"Who am i"} />

          <div className="flex gap-10 flex-col md:flex-row ">
            {/* About Image */}
            <div className="basis-1/3">
              <img
                className="w-[80%] md:w-[100%] rounded-sm shadow-sm "
                src={AboutImg}
                alt=""
              />
              <div className="relative">
                <div className="flex justify-center items-center text-white text-xl bg-red-500 w-28 h-28 rounded-full opacity-80 absolute -bottom-10 -left-10 ">
                  27歳
                </div>
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
                {/* I am a Front End Developer from Shizuoka,Japan.I enjoy taking beautiful interface designs.
                I also love the logic and structure of coding and always strive to write elegant and efficient code,whether it be HTML,CSS or ..... */}
                私は静岡県出身のフロントエンド開発者です。美しいインターフェースデザインを撮るのが好きです。
                私はコーディングのロジックと構造も大好きで、Html、Css、Javascript、React
                などエレガントで効率的なコードを書くよう常に努めています。
              </p>

              {/* <div className=" cursor-pointer  bg-orange-300 px-3 py-3 inline text-white shadow-sw " >More about me</div> */}
              {/* လိုလဲရေးလို့ ရပါတယ် */}
              {/* button52 */}
              <button
                className="button-52"
                role="button"
                // onClick={() => setModelStatus(true)} //moldel box
                onClick={handleOpenModel}
              >
                More About Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* model ပေါ်လာအောင် */}
      {modelStatus && (
        <div className="w-[100%] h-[100vh] fixed bg-black top-0 z-50 bg-opacity-10 flex justify-center items-center ">
          <div className="bg-white w-[95%] h-[95vh] border border-slate-400 rounded-sm shadow-sm  overflow-auto ">
            <div className="fixed right-10">
              <RiCloseLine
                className="text-5xl text-red-600 cursor-pointer  "
                // onClick={() => setModelStatus(false)} //model box close
                onClick={handleCloseModel}
              />
            </div>

            {/* Modal Detail */}
            <div className="w-[70%] mx-auto my-20 text-slate-700">
              <span className=" text-l italic ">Biography</span>
              <div className="border border-b-slate-700 w-full mb-5"></div>
              {/* Biography */}
              <div className="flex gap-10">
                <div className="basis-1/4">
                  <img src={PowerImg} className="w-full rounded-sm" alt="" />
                </div>
                <div className="basis-3/4">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>Khaing Zar Ni Maw</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>khaingzarnimaw1996@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>:</td>
                        <td>080-5160-7234</td>
                      </tr>
                      <tr>
                        <td>Birthday</td>
                        <td>:</td>
                        <td>1996-6-10</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>:</td>
                        <td>Female</td>
                      </tr>
                      <tr>
                        <td>Nationality</td>
                        <td>:</td>
                        <td>Burmese</td>
                      </tr>
                      <tr>
                        <td>Relagion</td>
                        <td>:</td>
                        <td>Buddha</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>
                          静岡市駿河区石田３丁目１６番４０号ホンケマンション２０２号
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="w-[70%] mx-auto my-20 text-slate-700">
              <span className="text-l italic">Education</span>
              <div className="border border-b-slate-700 w-full mb-5 "></div>
              {/* Biography */}

              <div className="flex">
                <div className="basis-1/3">
                  <div>
                    <div className="flex flex-col gap-4 text-sm">
                      <div>2012年10月 〜 2016年10月</div>
                      <div>2019年3月 〜 2021年3月</div>
                      <div>2021年4月 〜 2023年3月</div>
                    </div>
                  </div>
                </div>
                <div className="basis-2/3">
                  <div className="flex flex-col gap-4 text-sm">
                    <div>
                      B.A(Geography) Yangon University of Distance Education
                      (Dagon branch)
                    </div>
                    <div>国際言葉学院</div>
                    <div>
                      専門学校静岡電子情報カレッジ IT スペシャリスト IT
                      ゲームロボット＆システム学科
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="w-[70%] mx-auto my-20 text-slate-700">
              <span>Certification</span>
              <div className="border border-b-slate-900 w-full mb-5"></div>

              <div className="flex  w-80 mx-auto">
                <img className=" rounded-md my-4 mx-4"  alt="" />
                
                {/* <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  
                >
              {cardsData.map((card,index)=>{
                return (
                 <SwiperSlide key={index} >
                  <div className=" w-auto h-50 bg-black border border-blue-400 rounded-lg">
                  {card.title}
                   <img src={card.image} alt="" className=" rounded-lg"/>
                  </div>
                  
                 </SwiperSlide>
                );
              }

              )}
                </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
