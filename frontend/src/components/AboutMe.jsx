import React from "react";

//motion

import { motion } from "framer-motion";

//var motion

import { varMotion } from "../motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="lg:h-screen lg:snap-start lg:snap-always  bg-[#38A3A5] grid place-items-center lg:place-items-center justify-center md:grid-cols-2  lg:grid-cols-2 gap-0 
                 md:h-screen h-auto  "
    >
      <div className=" flex flex-col items-center bettween md:h-[50vh] w-[80vw] md:w-[45vw] lg:h-[50vh] lg:w-[45vw]">
        <h1 className=" text-3xl font-bold md:text-3xl md:font-bold lg:font-bold lg:text-5xl m-2">
          About Me{" "}
        </h1>

        <motion.div
          variants={varMotion("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-15 flex flex-col items-center "
        >
          <p className="text-1xl  md:text-[20px] lg:text-[30px] font-light">
            Mi name's{" "}
            <span className="font-bold text-blue-900">Emily Smith</span>, I have
            thrty yeasr old
          </p>

          <h1 className="text-2xl md:m-2 md:text-[30px] lg:text-[35px] font-bold m-2 ">
            I am a full Stack developer{" "}
          </h1>
        </motion.div>

        <motion.button
          variants={varMotion("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="bg-amber-950 mt-[40px] w-[100px] m-2   rounded-2xl border-1 text-amber-50 border-red-100 shadow-m transition-transform duration-900 hover:scale-[1.05]  hover:bg-amber-100 hover:text-amber-950 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                    md:mt-0 "
        >
          <p className="p-3 ">Go to CV </p>
        </motion.button>

        <ul className="flex flex-row gap-2 items-center m-4  ">
          <motion.li
            variants={varMotion("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
          >
            <img
              src="/img/instagram.png"
              alt=""
              className="w-[25px] md:w-[30px] lg:w-[35px]"
            />
          </motion.li>
          <motion.li
            variants={varMotion("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/img/facebook.png"
              alt=""
              className="w-[25px] md:w-[30px] lg:w-[35px]"
            />
          </motion.li>
          <li>
            <img
              src="/img/gorjeo.png"
              alt=""
              className="w-[25px] md:w-[30px] lg:w-[35px]"
            />
          </li>
          <motion.li
            variants={varMotion("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/img/youtube.png"
              alt=""
              className="w-[25px] md:w-[30px] lg:w-[35px]"
            />
          </motion.li>
          <motion.li
            variants={varMotion("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
          >
            <img
              src="/img/github.png"
              alt=""
              className="w-[25px] md:w-[30px] lg:w-[35px]"
            />
          </motion.li>
        </ul>
      </div>

      <div className="lg:row-span-2 md:row-span-2 bg-fuchsia-950 ">
        <div className="">
          <img
            src="/img/person.png"
            alt=""
            className="lg:w-[50vw] lg:h-[100vh]  transition-transform duration-1000 ease-in-out hover:scale-[1.01] border-l-[1px] border-gray-300  shadow-md  hover:shadow-[0_0_10px_2px_rgba(200,200,200,0.8)] "
          />
        </div>
      </div>

      <div className=" flex flex-col items-center gap-2 mb-20 ">
        <p className="text-center m-2 p-2">
          I am a full stack web developer, specializing in React and Node.js. I
          build complete applications, from attractive user interfaces to
          efficient databases. I enjoy optimizing performance and enhancing the
          user experience. Each project allows me to learn and grow
          professionally.
        </p>

        <h2 className="text-[12px] m-2">
          You can find the best works web here{" "}
        </h2>
      </div>
    </section>
  );
}
