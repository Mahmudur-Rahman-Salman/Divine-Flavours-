import React from "react";
import SectionTItle from "../Shared/SectionTItle";
import fetatureImg from "../assets/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${fetatureImg})` }}
      className="bg-cover bg-center text-white pt-8 my-20"
    >
      <SectionTItle subHeading={"check it out"} heading={"Featured Item"} />
      <div className="md:flex justify-center items-center gap-8 px-6 md:px-20 lg:px-36 py-12 ">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={fetatureImg}
            alt="feature item"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <p className="text-gray-200">Aug 20, 2029</p>
          <p className="uppercase text-xl font-semibold mb-3">
            Where can I get some?
          </p>
          <p className="text-gray-100 leading-relaxed">
            Discover our chef’s handpicked specials, crafted with love and fresh
            ingredients. From sizzling hot pizzas to refreshing garden salads,
            each bite is made to satisfy your cravings. Whether you’re in the
            mood for something light or indulgent, our featured items bring
            together the perfect balance of flavor and comfort.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-6">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
