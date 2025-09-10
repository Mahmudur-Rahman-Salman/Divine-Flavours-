import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import SectionTItle from "../Shared/SectionTItle";

const Category = () => {
  return (
    <div className="px-4 md:px-10 mb-10">
      <SectionTItle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTItle>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt="slider image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-12 md:-mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="slider image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="ttext-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-12 md:-mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="slider image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-12 md:-mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt="slider image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-12 md:-mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5}
            alt="slider image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-12 md:-mt-16 text-white">
            Vegetables
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
