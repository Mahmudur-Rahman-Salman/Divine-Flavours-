import React, { useEffect, useState } from "react";
import SectionTItle from "../Shared/SectionTItle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    try {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
          const popularItems = data.filter(
            (item) => item.category === "popular"
          );
          setMenu(popularItems);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <SectionTItle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTItle>
      <div className="grid md:grid-cols-2 gap-10 ">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4 mb-10 flex mx-auto">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
