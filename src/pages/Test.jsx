import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const Test = () => {
  return (
    <Swiper
      spaceBetween={50}//
      slidesPerView={3}//အရေအတွက်
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="">Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default Test;
