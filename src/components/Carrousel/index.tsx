import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { CarrouselContainer } from "./styles";
import Image from "next/image";

 const CarrouselComponent = () => {
  return (
    <CarrouselContainer>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/images/carrousel/1.png" alt="" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carrousel/2.png" alt="" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carrousel/3.png" alt="" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carrousel/4.png" alt="" layout="fill" />
        </SwiperSlide>
      </Swiper>
    </CarrouselContainer>
  );
}

export default CarrouselComponent
