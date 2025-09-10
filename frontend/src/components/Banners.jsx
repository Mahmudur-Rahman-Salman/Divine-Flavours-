import React from "react";
// import bannerImg from "../assets/banners.jpg";

import { CiSearch } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";

const Banners = () => {
  return (
    <div>
      {/* <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-4/6 md:w-5/6 w-full mb-10 object-cover object-center rounded"
            alt="hero"
            src={bannerImg}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Taste the Flavors of Happiness
            </h1>
            <p className="mb-8 leading-relaxed">
              Freshly baked bread, warm from the oven, melts in your mouth with
              every bite. Our chefs craft each dish with love, blending spices,
              herbs, and flavors that remind you of home yet surprise you with
              something new.
            </p>
            <p className="mb-8 leading-relaxed">
              From sizzling hot kebabs to creamy pastas, every plate tells a
              story of passion and freshness. The aroma of roasted garlic, slow
              cooked meats, and garden-fresh vegetables welcomes you the moment
              you step in.
            </p>
            <p className="mb-8 leading-relaxed">
              Whether it’s a sweet slice of cheesecake, a crunchy pizza loaded
              with toppings, or a refreshing fruit salad, our menu is designed
              to make every meal a celebration.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Order Now
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <div className="w-full h-full bg-[#FBFBFB] rounded-md">
        {/* header */}
        <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-10 items-center p-8">
          <div className="w-full lg:w-[55%]">
            <h1 className="text-[40px] dark:text-[#abc2d3] sm:text-[60px] font-[600] leading-[45px] sm:leading-[70px]">
              Taste the <span className="text-[#F38160]">Flavors </span>of
              Happiness come to you
            </h1>
            <p className="text-[18px] text-gray-400 dark:text-slate-400 mt-2">
              Freshly baked bread, warm from the oven, melts in your mouth with
              every bite. Our chefs craft each dish with love, blending spices,
              herbs, and flavors that remind you of home yet surprise you with
              something new.
            </p>

            <div className="grid grid-cols-1 400px:grid-cols-2 gap-[15px] w-full sm:w-[80%] mt-4">
              <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-400 text-[1rem]">
                <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
                Fresh Vegetables
              </p>
              <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-400 text-[1rem]">
                <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
                100% Guarantee
              </p>
              <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-400 text-[1rem]">
                <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
                Organic Foods
              </p>
             
            </div>
          </div>

          <div className="w-full sm:w-[40%]">
            <img
              src="https://i.ibb.co/61R7zbv/delivery-concept-handsome-african-american-deliver-AZUZTZ3-1.png"
              alt="image"
              className="w-full h-full"
            />
          </div>
        </header>

      
      </div>
    </div>
  );
};

export default Banners;
