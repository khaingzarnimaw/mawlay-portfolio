import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Title from "./resources/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Portfolio = () => {

  const [projects, setProjects] = useState([
    {
      title: "Project One",
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["Javascript", "C#", "TailWind"],
    },
    {
      title: "Project Two",
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["TailWind", "Css", "Html"],
    },
    {
      title: "Project Three",
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["PHP", "Laravel"],
    },
    {
      title: "Project One",
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["Javascript", "C#", "TailWind"],
    },
    {
      title: "Project Two",
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["TailWind", "Css", "Html"],
    },
    {
      title: "Project Three",
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["PHP", "Laravel"],
    },
  ]);

  return (
    <div className="h-screen flex  justify-center items-center my-20">
      <div className="w-[70%] mx-auto ">
        {/* <span className="text-2xl font-bold underline ">Portfolio</span>
        <span className="text-xs bg-slate-300 p-1 ml-2 ">work do so far</span> */}
        <Title title={"Portfolio"} setTitle={"Work do so far"} />

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper"
        >
          {projects?.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard data={project} />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
