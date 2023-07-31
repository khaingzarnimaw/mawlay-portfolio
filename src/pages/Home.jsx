import React from "react";
import About from "../components/About";
import Contant from "../components/Contant";
import Portfolio from "../components/Portfolio";
import Top from "../components/Top";
import Skill from "../components/Skill"
import Hobbie from "../components/Hobbie"
// import Swiper from "../components/Swiper";


const Home = () => {
  return (
    <>
      {/* Home အရင်ဆုံးပေါ်အောင်လုပ် */}

      <Top/>
      <About />
      <Skill/>
      <Portfolio  />
      <Hobbie/>
      <Contant />
      {/* <Swiper/> */}
      
      
    </>
  );
};

export default Home;
