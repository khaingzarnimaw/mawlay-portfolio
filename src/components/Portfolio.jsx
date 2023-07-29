import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Title from "./resources/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      title: "Project One",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://mvc-todo.vercel.app/",
      languages: ["React", "TailWind"],
    },
    {
      title: "Project Two",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://react-creative-coder.vercel.app/",
      languages: ["TailWind", "Css", "Html"],
    },
    {
      title: "Project Three",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quasi
      explicabo quia vero aspernatur sunt provident. Porro minima aliquid
      exercitationem, tenetur aliquam repellat esse eos non atque. Corrupti,
      tempora nostrum?`,
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://foodie-eta-dusky.vercel.app/",
      languages: ["React", "TailWind"],
    },
  ]);
  //  console.log(projects);

  return (
    <div
      className="md:h-screen md:my-0 flex flex-col justify-center items-center my-5"
      id="portfolio"
    >
      <div className="w-[70%] mx-auto ">
        {/* <span className="text-2xl font-bold underline ">Portfolio</span>
        <span className="text-xs bg-slate-300 p-1 ml-2 ">work do so far</span> */}
        <Title title={"Portfolio"} setTitle={"Work do so far"} />
        {/* <div className="flex gap-5 flex-col md:flex-row "> */}

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
          modules={[Autoplay,Pagination,Navigation]}
          className="mySwiper"
        >
          {projects?.map((project, index) => {
            return (
              <SwiperSlide key= {index}>
                <ProjectCard data= {project} />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>

      
      </div>
    </div>
  );
};

export default Portfolio;
