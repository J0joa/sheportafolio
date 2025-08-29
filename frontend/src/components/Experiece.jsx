import React from "react";

import { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { varMotion } from "../motion";

export default function Services() {
  const items = [
    "/img/html5.png",
    "/img/css3.png",
    "/img/javascript.png",
    "/img/python.png",
    "/img/react.png",
  ];
  const loopItems = [...items, ...items];

  function useMediaQuery(query) {
    const [match, setMatch] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      setMatch(media.matches);

      const listener = () => setMatch(media.matches);

      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }, [query]);

    return match;
  }

  const isMd = useMediaQuery("(max-width:1040px)");

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    });
  }, [controls]);

  return (
    <section
      id="experience"
      className="lg:h-screen lg:snap-start lg:snap-always relative h-screen bg-[#240046] flex flex-col items-center justify-center "
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 lg:w-150 md:w-80 w-20 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-100"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 lg:w-150 md:w-80 w-20 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-100"></div>

      <div>
        {" "}
        <motion.h1
          variants={varMotion("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl text-amber-50 font-bold m-5"
        >
          {" "}
          Mi Experiencia{" "}
        </motion.h1>
      </div>

      <div
        className={` w-full overflow-hidden overflow-x-auto hide-scrollbar ${
          isMd
            ? "overflow-hidden overflow-x-auto hide-scrollbar w-full"
            : "w-none"
        }`}
      >
        <motion.ul
          transition={
            isMd
              ? { repeat: Infinity, duration: 10, ease: "linear" }
              : { repeat: 0, duration: 0, ease: "linear" }
          }
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => controls.stop()}
          onDragEnd={() => {
            controls.start({
              x: [0, -2000],
              transition: { repeat: Infinity, duration: 20, ease: "linear" },
            });
          }}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: [0, -2000],
              transition: { repeat: Infinity, duration: 20, ease: "linear" },
            })
          }
          animate={controls}
          className={`  flex flex-nowrap w-[5000px]  gap-5 m-5 text-amber-50 ${
            isMd ? " flex flex-nowrap w-[2000px] m-4   " : ""
          }`}
        >
          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/react.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/sotfware.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/youtube.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/react.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/sotfware.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]      
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/youtube.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/react.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/sotfware.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/youtube.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/react.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/sotfware.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/youtube.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/react.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/sotfware.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1 }}
            className="relative lg:w-[90vw] lg:h-auto overflow-hidden group border-1 rounded-2xl border-blue-900 shadow-emerald-50 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]
                                md:h-[55vh] md:w-[110vw]
                                h-[45vh] w-[110vw]"
          >
            <div className="h-[60vh]">
              <img
                src="/img/youtube.png "
                alt=""
                className="lg:w-[150px] lg:h-[150px] lg:m-4
                           md:w-[70px] md:h-[70px] md:m-2
                          w-[50px] h-[50px] m-2"
              />{" "}
              <h2
                className="lg:m-4 text-sky-200 font-bold lg:text-2xl
                            md:m-2 md:text-[15px]
                            m-1 text-[12px]"
              >
                Desarrollo de Frontend REACT, NextJS
              </h2>{" "}
              <p
                className="h-[20vh] m-4  font-light
                            md:text-[12px]
                            text-[12px] "
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>{" "}
              <p
                className="lg:p-8 absolute z-50 rounded-t-2xl lg:h-[46vh] top-0 -translate-y-[563px] group-hover:translate-y-0 bg-black/80 lg:group-hover:block w-full text-2xl font-light transition-transform duration-500 ease-in-out
                            md:p-5  md:text-[20px] md:h-[40vh] 
                            p-5  text-[12px] h-[33vh]"
              >
                Desarrollo de interfaces interactivas y responsivas utilizando
                React, integrando APIs REST y optimizando el rendimiento
                mediante hooks y lazy loading.
              </p>
            </div>

            <div
              className="absolute lg:top-78  overflow-hidden mx-auto w-[90%] select-none
                                        md:top-70
                                        top-55"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-12"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-30"></div>
              <motion.div
                className="flex w-[200%] m-4"
                animate={{ x: ["0%", "-80%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {loopItems.map((n, i) => (
                  <div
                    key={i}
                    className="lg:h-20 lg:w-30  flex-shrink-0 m-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md
                    md:h-15  md:w-20
                    h-12 w-18 p-2
                    "
                  >
                    <img src={n} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.li>
        </motion.ul>

        <a
          href="#wellcome"
          className="absolute z-8 m-auto left-[47vw] top-[90vh] bg-emerald-300 p-4 rounded-[5px] font-bold text-blue-950 hover:text-blue-200 hover:bg-blue-500  "
        >
          Back
        </a>
      </div>
    </section>
  );
}
