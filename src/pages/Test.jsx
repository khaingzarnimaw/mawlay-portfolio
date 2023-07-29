import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import {GiGemini} from 'react-icons/gi';


const Test = () => {
  const [array, setArray] = useState([
    { image: Power, name: "Power Slide" },
    { image: Power, name: "Power Slide 2" },
    { image: Power, name: "Power Slide 3" },
    { image: Power, name: "Power Slide 4" },
  ]);

  return (
    <div className=" h-screen w-[70%] flex justify-center items-center mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {array.map((el, index) => (
          <SwiperSlide key={index}>
            <div className=" bg-slate-800 ">
              <img src={el.image} alt="" />
              <div>{el.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Test;
