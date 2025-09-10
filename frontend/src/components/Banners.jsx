import React from "react";
import bannerImg from "../assets/banners.jpg";

const Banners = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
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
      </section>
    </div>
  );
};

export default Banners;
