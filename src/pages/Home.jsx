import React from "react";
import About from "../components/About"
import Contant from "../components/Contant"
import Portfolio from "../components/Portfolio"
import Top from "../components/Top"

const Home = () => {
  return (
    <>
      {/* Home အရင်ဆုံးပေါ်အောင်လုပ် */}
     
      {/* <Top/> */}
      <About/>
       <Portfolio/>
      <Contant/> 
      
    </>
  )
}

export default Home;

