import React from "react";

import { useContext, useRef, useState } from "react";

import { NavContext } from "../context/useContext";

export default function Wellcome({ classAboutMe }) {
  const { seeNav, setSeeNav } = useContext(NavContext);

  const contentRef = useRef(null);

  const [flit, setFlit] = useState(true);

  return (
    <section
      id="wellcome"
      className="h-auto md:h-screen lg:h-screen bg-[#240046]  lg:scroll-mt-0  grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:snap-start  lg:snap-always  "
    >
      <div
        className="bg-[#5A189A] flex flex-col items-center justify-center ml-6 mt-6 mb-6 mr-6  p-6 rounded-2xl transition-transform duration-1000 ease-in-out hover:scale-[1.02] border-[1px] border-gray-300  shadow-md 
             hover:shadow-[0_0_10px_2px_rgba(200,200,200,0.8)]    "
      >
        <div>
          {" "}
          <img
            src="/img/wellcome.png"
            alt=""
            className={` transition-transform duration-1000 ease-in-out hover:scale-[1.1] mt-20 h-40 w-80 object-cover border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]  ${
              flit ? "duration-100 animate-bounce" : ""
            }`}
          />
        </div>

        <p className="text-amber-50 m-4 text-[14px] md:text-[18px] lg:text-2xl transition-transform duration-2000 ease-in-out hover:scale-105 flex text-center p-2">
          Find Our Projects and discover much more
        </p>
        <div className="flex items-center justify-center rounded-1xl">
          <p className=" h-1 w-[20vw] m-8  bg-amber-50 "></p>
        </div>
        <a href=    "#Contanc" className="  bg-[#7B2CBF] p-4 w-15 h-15 rounded-2xl font-bold text-[#E0AAFF] transition-transform duration-1000 ease-in-out hover:scale-[1.1] hover:bg-[#C77DFF] hover:text-[#240046] border-[1px] border-gray-300  shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] ">
          Go
        </a>
      </div>

      <div
        className="bg-[#C77DFF]    flex flex-col items-center justify-center  md:p-8  md:m-6   lg:m-6 ml-6 mr-6 rounded-2xl p-6 transition-transform duration-1000 ease-in-out hover:scale-[1.02] border-[1px] border-gray-300  shadow-md 
          hover:shadow-[0_0_10px_2px_rgba(200,200,200,0.8)]  "
      >
        <div
          ref={contentRef}
          className="border-1  rounded-2xl md:border-none md:bg-transparent lg:bg-transparent border-gray-50  flex items-center  bg-amber-300/20 w-55 overflow-x-auto  scroll-smooth span-x span-mandatory no-scrollbar md:snap-none md:scroll-auto  md:overflow-x-visible  md:w-full lg:w-full md:h-full lg:h-full md:grid lg:grid md:grid-cols-1 lg:grid-cols-1 grid-flow-row   gap-4 h-64 "
        >
          <div className="flex flex-col items-center">
            <div
              href="#projects"
              className="m-2 p-7 flex flex-col items-center justify-center md:col-span-2   lg:col-span-2 w-50 h-45 md: md:w-auto md:h-auto object-cover flex-none  md:flex lg:flex  border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700"
            >
              <img
                src="/img/im2.png"
                alt=""
                className="w-full h-full  m-2 cover transition-transform duration-1000 ease-in-out hover:scale-[1.1] border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] "
              />
            </div>
            <a href="#projects" className="bg-blue-500 rounded-[5px] mb-4">
              <h1 className="font-black text-blue-950 p-2 hover:bg-emerald-600 hover:text-emerald-200 ">
                Projects
              </h1>
            </a>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col items-center">
            <div className="m-4 w-47 h-47 md:max-w-[150px]  md:max-h-[150px]  p-4 flex-none object-cover md:flex md:flex-col lg:flex lg:flex-col items-center justify-center   border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700 ">
              <img
                src="/img/im1.jpg"
                alt=""
                className="w-full h-full m-1 object-cover transition-transform duration-1000 ease-in-out hover:scale-[1.1] border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] "
              />
            </div>
            <a href="#experience" className="bg-blue-500 rounded-[5px] mb-4 ">
              <h1 className="font-black text-blue-950 p-2 hover:bg-emerald-600 hover:text-emerald-200 ">
                Experience
              </h1>
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="m-4 w-47 h-47 md:max-w-[150px]  md:max-h-[150px] p-4 object-cover flex-none md:flex md:flex-col  lg:flex lg:flex-col items-center justify-center border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700 ">
              {" "}
              <img
                src="/img/im3.png"
                alt=""
                className="w-full h-full m-1 object-cover  transition-transform duration-1000 ease-in-out hover:scale-[1.1] border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] "
              />
            </div>
            <a href="#services" className="bg-blue-500 rounded-[5px] mb-4">
              <h1 className="font-black text-blue-950 p-2 hover:bg-emerald-600 hover:text-emerald-200 ">
                Services
              </h1>
            </a>
          </div>
          </div>

          
        </div>
        <div className="block md:hidden lg:hidden">
          <button onClick={() => (contentRef.current.scrollLeft -= 235)}>
            <i className="bxr  bx-skip-previous-circle   text-4xl md:text-5xl lg:text-6xl p-6 "></i>{" "}
          </button>
          <button onClick={() => (contentRef.current.scrollLeft += 235)}>
            <i className="bxr  bx-skip-next-circle   text-4xl md:text-5xl lg:text-6xl p-6 "></i>{" "}
          </button>
        </div>
      </div>

      <div
        className="bg-[#E0AAFF] flex items-center text-center justify-center ml-6 mr-6 mt-0 lg:mt-6 mb-6 rounded-2xl  md:col-span-2 lg:col-span-1 p-1 transition-transform duration-1000 ease-in-out hover:scale-[1.02] border-[1px] border-gray-300  shadow-md 
            hover:shadow-[0_0_10px_2px_rgba(200,200,200,0.8)] "
      >
        <p className="font-light md:text-2xl lg:text-3xl  transition-transform duration-1000 ease-in-out hover:scale-[1.01] md:m-2 m-6 md:p-2 p-6 border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]  ">
          Good news alert, this message is full of positive energy John 3:16
        </p>
      </div>
    </section>
  );
}
