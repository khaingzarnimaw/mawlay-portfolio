import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';//swiper input

import {GiGemini} from 'react-icons/gi';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';




const Test = () => {
  return (
    < >
    <div className=" mt-80">

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"

        navigation={true} 
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    
    
    {/* <div>
    <GiGemini className="flex justify-center items-center h-screen text-8xl mx-auto food"/>
    </div>
    <div>
    <GiGemini className="flex justify-center items-center h-screen text-8xl mx-auto food"/>
    </div> */}
    
    
    


  </>
    
  );
};

export default Test;
