import { li, ul } from "framer-motion/client";
import React, { useState } from "react";

export default function Services() {
  const [openSkill, setOpenSkill] = useState(false);

  const services = [
    { name: "Web Disaing", img: "/img/disaing.png", id: 1 },
    {
      name: "Apps Web",
      img: "/img/appWeb.png",
      id: 2,
    },
    {
      name: "SEO Web",
      img: "/img/seo.png",
      id: 3,
    },
    {
      name: "App Integration",
      img: "/img/integration.png",
      id: 4,
    },
    {
      name: "Web Maintenance",
      img: "/img/maintenance.png",
      id: 5,
    },
  ];
  return (
    <section id="services" className="p-5 bg-[#126782] ">
      <h1 className="m-4 text-2xl font-bold text-center
                         md:text-4xl
      
      ">Services</h1>

      <ul className="grid grid-flow-col grid-rows-1 overflow-x-auto hide-scrollbar m-4 border-2 border-amber-50 rounded-[7px] ">
        {services.map((i) => (
          <li
            key={i.id}
            className="flex flex-col items-center w-[200px] h-auto m-2 p-2 rounded-[5px] bg-amber-300"
          >
            <img src={i.img} alt="" className="w-40 object-cover m-auto " />

            <h1>{i.name}</h1>
          </li>
        ))}
      </ul>

      <div className=" bg-[#0B132B] rounded-[7px] ">
        <div
          onMouseEnter={() => setOpenSkill(true)}
          onMouseLeave={() => setOpenSkill(false)}
          className=" flex items-center justify-center"
        >
          <h2 className=" m-auto bg-amber-50 h-[50px] w-full text-center p-2 text-[20px] font-bold rounded-[6px]">
            SKILLS
          </h2>
        </div>

        {openSkill && (
          <ul
            onMouseEnter={() => setOpenSkill(true)}
            onMouseLeave={() => setOpenSkill(false)}
            className=" group "
          >
            <li className="relative ">
              <div className={` w-[30%] group transition-transform duration-800 ease-in-out group-hover:w-[95%] h-full flex    `}>
                <h1 className=" bg-[#FFBE0B] w-full h-full p-2 m-2 rounded-r-[5px] relative ">HTML5  <span className="absolute  opacity-0 group-hover:opacity-100 right-3">95%</span></h1>
              </div>
            </li>
            <li className="relative">
              <div className={` w-[30%] group transition-transform duration-800 ease-in-out group-hover:w-[80%] h-full flex rounded-r-[5px]    `}>
                <h1 className=" bg-[#FB5607] w-full h-full p-2 m-2 rounded-r-[5px] relative ">CSS3  <span className="absolute  opacity-0 group-hover:opacity-100 right-3">80%</span></h1>
              </div>
            </li>
            <li className="relative">
              <div className={` w-[30%]  group-hover:w-[90%] h-full flex rounded-r-[5px]    `}>
                <h1 className=" bg-[#FF006E] w-full h-full p-2 m-2 rounded-r-[5px] relative ">JAVASCRIPT  <span className="absolute opacity-0 group-hover:opacity-100  right-3">90%</span></h1>
              </div>
            </li>
            <li className="relative">
              <div className={` w-[30%]  group-hover:w-[85%] h-full flex rounded-r-[5px]    `}>
                <h1 className=" bg-[#8338EC] w-full h-full p-2 m-2 rounded-r-[5px] relative ">REACT  <span className="absolute opacity-0 group-hover:opacity-100  right-3">85%</span></h1>
              </div>
            </li>
            <li className="relative">
              <div className={`  w-[30%]   group-hover:w-[97%] h-full flex rounded-r-[5px]     `}>
                <h1 className=" bg-[#3A86FF] w-full h-full p-2 m-2 rounded-r-[5px] relative ">SQL  <span className="absolute opacity-0 group-hover:opacity-100  right-3">97%</span></h1>
              </div>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}
