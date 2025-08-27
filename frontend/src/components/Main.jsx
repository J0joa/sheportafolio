import { useRef } from "react";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { varMotion } from "../motion";

function Main({ classHeader }) {
  const contentRef = useRef(null);
  const [seeNav, setSeeNav] = useState(true);
  const [seeNavBig, setSeeNavBig] = useState(false);
  const [open, setOpen] = useState(false);

  const [flit, setFlit] = useState(true);

  // Leer del localStorage si estaba cerrado o abierto
  const [seeNavb, setSeeNavb] = useState(() => {
    const saved = localStorage.getItem("seeNavb");
    return saved !== null ? JSON.parse(saved) : true; // true = abierto por defecto
  });

  // Cada vez que cambie el estado, lo guardo en localStorage
  useEffect(() => {
    localStorage.setItem("seeNavb", JSON.stringify(seeNavb));
  }, [seeNavb]);

  const handleClick = (e, id) => {
    e.preventDefault();
    // Cierro el menú cuando clico
    setSeeNavb(false);

    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "instant" });
    }, 50);
  };

  const handleOnClick = (e, id) => {
    e.preventDefault();
    setFlit(true);

    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "instant" });
      setFlit(false);
    }, 600);
  };

  const toggleNavMenu = () => {
    setSeeNavBig(!seeNavBig);
  };

  return (
    <>
      <div className={classHeader}>
        <i
          className="group w-full text-1xl fixed z-11 top-0  px-[5vw]     border-amber-50   bg-red-500  duration-300 ease-in-out hover:scale-[1.001] hover:bg-amber-400  hidden md:block lg:block    bxr   bx-burger"
          onClick={() => setSeeNavb(!seeNavb)}
          onMouseEnter={() => setSeeNavb(true)}
          onMouseLeave={() => setSeeNavb(false)}
        >
          {" "}
        </i>
         <h2 className=" lg:fixed md:fixed hidden md:block lg:block z-11 top-0 translate-x-[45vw] text-[11px] font-bold">BAR MENU</h2>
        <i
          className=" fixed  z-1001  block  left-5 top-5 bxr md:hidden lg:hidden   bx-food-menu text-4xl"
          onClick={() => setSeeNav(!seeNav)}
        ></i>
        {seeNavb && (
          <div
            onMouseEnter={() => setSeeNavb(true)}
            onMouseLeave={() => setSeeNavb(false)}
            className={`bg-[#FFC8DD] z-8 fixed w-full top-4 md:flex  md:items-center md:justify-center lg:gap-0 h-12 md:h-45 lg:h-40 group`}
          >
            <h1 className=" text-1xl  md:text-1xl  lg:text-2xl text-[#240046] font-bold m-2 p-5 border-1  border-gray-100 hidden md:block lg:block   ">
              EMILY SMITH{" "}
            </h1>

            <ul className=" flex-col  md:flex md:flex-row  lg:m-4   bg-amber-300 hidden">
              <li
                className="group relative lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900  border-amber-300 hover:rounded-3xl"
                onClick={(e) => handleClick(e, "main")}
              >
                <div className="absolute  z-3  transform duration-500 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:w-14 group-hover:h-14 group-hover:rounded-full group-hover:bg-[#ECBCFD] group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-7 group-hover:border-amber-300    ">
                  <i className=" bxr md:text-2xl lg:text-3xl  bx-user"></i>{" "}
                </div>
                <a href="#main" className="absolute top-7 m-4 md:m-2">
                  Main
                </a>{" "}
              </li>

              <li
                className="group relative lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900  border-amber-300 hover:rounded-3xl"
                onClick={(e) => handleClick(e, "wellcome")}
              >
                <div className="absolute   z-3 transform duration-500 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:w-14 group-hover:h-14 group-hover:rounded-full group-hover:bg-[#ECBCFD] group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-7 group-hover:border-amber-300    ">
                  <i className="bxr md:text-2xl lg:text-3xl  bx-happy-beaming"></i>{" "}
                </div>
                <a href="#wellcome" className="absolute top-7 m-4 md:m-2">
                  Welcome
                </a>{" "}
              </li>

              {/* <li className="lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
              <i className="bxr md:text-2xl lg:text-3xl  bx-happy-beaming"></i>{" "}
              <a href="#Welcome" className="m-4 md:m-2">
                Welcome
              </a>{" "}
            </li> */}

              <li
                className="group relative lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900  border-amber-300 hover:rounded-3xl"
                onClick={(e) => handleClick(e, "about")}
              >
                <div className="absolute  z-3 transform duration-500 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:w-14 group-hover:h-14 group-hover:rounded-full group-hover:bg-[#ECBCFD] group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-7 group-hover:border-amber-300    ">
                  <i className="bxr md:text-2xl lg:text-3xl  bx-face-alt"></i>{" "}
                </div>
                <a href="#main" className="absolute top-7 m-4 md:m-2">
                  About Me
                </a>{" "}
              </li>

              {/* <li className="lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
              <i className="bxr md:text-2xl lg:text-3xl  bx-face-alt"></i>{" "}
              <a href="#AboutMe" className="m-4 md:m-2">
                About Me
              </a>
            </li> */}

              <li
                className="group relative lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900  border-amber-300 hover:rounded-3xl"
                onClick={(e) => handleClick(e, "experience")}
              >
                <div className="absolute  z-3 transform duration-500 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:w-14 group-hover:h-14 group-hover:rounded-full group-hover:bg-[#ECBCFD] group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-7 group-hover:border-amber-300    ">
                  <i className="bxr md:text-2xl lg:text-3xl  bx-solar-panel"></i>
                </div>
                <a href="#main" className="absolute top-7 m-4 md:m-2">
                  Experience
                </a>{" "}
              </li>

              {/* <li className="lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
              <i className="bxr md:text-2xl lg:text-3xl  bx-solar-panel"></i>{" "}
              <a href="#Experience" className="m-4 md:m-2">
                Experience
              </a>{" "}
            </li> */}

              <li
                className="group relative lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900  border-amber-300 hover:rounded-3xl"
                onClick={(e) => handleClick(e, "projects")}
              >
                <div className="absolute  z-3 transform duration-500 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:w-14 group-hover:h-14 group-hover:rounded-full group-hover:bg-[#ECBCFD] group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-7 group-hover:border-amber-300    ">
                  <i className="bxr md:text-2xl lg:text-3xl bx-axe"></i>{" "}
                </div>
                <a href="#main" className="absolute top-7 m-4 md:m-2">
                  Projects
                </a>{" "}
              </li>

              {/* <li className="lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
              <i className="bxr md:text-2xl lg:text-3xl bx-axe"></i>{" "}
              <a href="#Project" className="m-4 md:m-2">
                Projects
              </a>{" "}
            </li> */}

              <li
                className="group relative lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900  border-amber-300 hover:rounded-3xl"
                onClick={(e) => handleClick(e, "services")}
              >
                <div className="absolute  z-3  transform duration-500 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:w-14 group-hover:h-14 group-hover:rounded-full group-hover:bg-[#ECBCFD] group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-7 group-hover:border-amber-300    ">
                  <i className="bxr md:text-2xl lg:text-3xl  bx-store-alt-2"></i>{" "}
                </div>
                <a href="#main" className="absolute top-7 m-4 md:m-2">
                  Services
                </a>{" "}
              </li>

              {/* <li className="lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
              <i className="bxr md:text-2xl lg:text-3xl  bx-store-alt-2"></i>{" "}
              <a href="Services" className="m-4 md:m-2">
                Services
              </a>{" "}
            </li> */}

              <li
                className="group relative lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900  border-amber-300 hover:rounded-3xl md:h-20 lg:h-18 "
                onClick={(e) => handleClick(e, "contacts")}
              >
                <div className="absolute z-3 transform duration-500 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:w-14 group-hover:h-14 group-hover:rounded-full group-hover:bg-[#ECBCFD] group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-7 group-hover:border-amber-300    ">
                  <i className="bxr md:text-2xl lg:text-3xl  bx-phone-book "></i>{" "}
                </div>
                <a
                  href="#Contacto "
                  className="absolute top-5 m-4 md:m-2 lg:m-4"
                >
                  Contacto
                </a>{" "}
              </li>

              {/* <li className="lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
              <i className="bxr md:text-2xl lg:text-3xl  bx-phone-book "></i>{" "}
              <a  className="m-0 md:m-0">
                
              </a>{" "}
            </li> */}
            </ul>

            <img
              className="w-20  md:w-20 m-2 p-5 border-1  border-gray-100 hidden md:block lg:block"
              src="/img/logo.png"
              alt=""
            />
          </div>
        )}

        {seeNav && (
          <div className=" fixed top-0 w-full z-1000 md:hidden lg:hidden">
            <ul className="flex-col md:flex md:flex-row m-4  bg-amber-300">
              <li className="flex flex-col items-center">
                <h1 className=" text-1xl md:text-1xl  lg:text-2xl text-[#240046] font-bold m-2 p-5 border-1  border-gray-100  ">
                  EMILY SMITH{" "}
                </h1>
              </li>
              <li className="mx-2 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] hover:bg-[#ECBCFD] text-amber-100 hover:text-red-900">
                <i className="bxr md:text-2xl m-2 lg:text-3xl  bx-user"></i>{" "}
                <a href="#main" className="m-2 md:m-2">
                  Main
                </a>{" "}
              </li>
              <li className="mx-2 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
                <i className="bxr md:text-2xl m-2 lg:text-3xl  bx-happy-beaming"></i>{" "}
                <a href="#Welcome" className="m-2 md:m-2">
                  Welcome
                </a>{" "}
              </li>
              <li className="mx-2 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
                <i className="bxr md:text-2xl m-2 lg:text-3xl  bx-face-alt"></i>{" "}
                <a href="#AboutMe" className="m-2 md:m-2">
                  About Me
                </a>
              </li>
              <li className="mx-2 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
                <i className="bxr md:text-2xl m-2 lg:text-3xl  bx-solar-panel"></i>{" "}
                <a href="#Experience" className="m-2 md:m-2">
                  Experience
                </a>{" "}
              </li>
              <li className="mx-2 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
                <i className="bxr md:text-2xl m-2 lg:text-3xl bx-axe"></i>{" "}
                <a href="#Project" className="m-2 md:m-2">
                  Projects
                </a>{" "}
              </li>
              <li className="mx-2 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
                <i className="bxr md:text-2xl m-2 lg:text-3xl  bx-store-alt-2"></i>{" "}
                <a href="Services" className="m-2 md:m-2">
                  Services
                </a>{" "}
              </li>
              <li className="mx-2 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
                <i className="bxr md:text-2xl m-2 lg:text-3xl  bx-phone-book "></i>{" "}
                <a href="#Contacto " className="m-2 md:m-2">
                  Contacto
                </a>{" "}
              </li>
              <li className="flex flex-col items-center">
                <img
                  className="w-20  md:w-20 m-2 p-5 border-1  border-gray-100  "
                  src="/img/logo.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* CONTENEDOR PRINCIPAL CON EFECTO PAGE FLIP */}
      <div
        className={`relative  transition-transform duration-600 ${
          flit ? "animate-pageFlip" : ""
        } `}
      >
        <section
          id="main"
          className="relative grid   md:grid-cols-2 lg:grid-cols-3  md:h-screen lg:h-screen items-center m-4   "
        >
          {" "}
          <div className="md:col-span-2 lg:col-span-3 md:h-1/8  lg:h-1/4 flex items-center justify-center  ">
            {" "}
            <motion.h1
              variants={varMotion("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="md:text-2xl lg:text-4xl"
            >
              ¡Hola!, I am Emily Smith{" "}
            </motion.h1>
          </div>
          <div className=" m-5  bg-[#BDE0FE]/10 border-[1px] border-amber-100 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700  ">
            <p className="m-5  text-[14px] md:text-[18px] lg:text-2xl text-[#5A189A] font-stretch-extra-condensed transition-transform duration-2000 ease-in-out hover:scale-105">
              I am a full stack web developer, specializing in React and
              Node.js. I build complete applications, from attractive user
              interfaces to efficient databases. I enjoy optimizing performance
              and enhancing the user experience. Each project allows me to learn
              and grow professionally.
            </p>
          </div>
          <div className="group relative  flex flex-col items-center h-full z-1 m-1 p-4 md:row-span-2 lg:col-span-1">
            <img
              src="/img/yo.png"
              alt=""
              className="md:w-[350px] lg:w-[400px]  transition-transform duration-2000 ease-in-out hover:scale-105"
            />
            {/* <h1 className="absolute  top-50 z-[-1] transition-transform duration-300 group-hover:translate-y-50 group-hover:translate-x-[5]  text-2xl ">
              
            </h1> */}

            <h1 className="absolute top-41 md:top-40  z-[-1] transition-transform duration-400  lg:group-hover:translate-y-65 lg:group-hover:-translate-x-30  md:group-hover:translate-y-50 md:group-hover:-translate-x-10    text-1xl md:text-[14px] lg:text-[20px] ">
              ¡Welcome!,
            </h1>

            <div className="absolute top-40 md:top-30 lg:top-30  z-[-1]   lg:group-hover:translate-y-65  lg:group-hover:-translate-x-0 md:group-hover:translate-y-75  md:group-hover:translate-x-10   mx-1 lg:w-[100px] md:w-[73px] m-0  md:m-1  lg:m-1 md:text-[14px] flex flex-col items-center rounded-2xl bg-[#C77DFF] text-amber-100 transition-transfrom duration-1200 ease-out  hover:bg-[#ECBCFD] hover:text-red-900">
              <i className="bxr md:text-1xl m-1 lg:text-3xl  bx-phone-book "></i>{" "}
              <a href="#Contacto " className="m-1 md:m-1">
                Contacto
              </a>{" "}
            </div>

            <h1 className="absolute top-41 md:top-40  z-[-1] transition-transform duration-800  lg:group-hover:translate-y-65 lg:group-hover:translate-x-35 md:group-hover:translate-y-70 md:group-hover:translate-x-33   text-1xl md:text-[14px]  lg:text-[20px] ">
              me, ¡please!.
            </h1>

            <h1 className="absolute top-41 md:top-40  z-[-1] transition-transform duration-400  lg:group-hover:translate-y-76 lg:group-hover:-translate-x-18 md:group-hover:translate-y-60 md:group-hover:-translate-x-15  text-1xl md:text-[14px] lg:text-[20px] ">
              I am
            </h1>
            <h1 className="absolute top-41 md:top-40  z-[-1] transition-transform duration-500  lg:group-hover:translate-y-76 lg:group-hover:translate-x-5  md:group-hover:translate-y-70 md:group-hover:-translate-x-10  text-1xl md:text-[14px] lg:text-[20px] ">
              EMILY SMITH
            </h1>
          </div>
          <div className="m-1 bg-[#BDE0FE]/10  border-1 border-amber-50 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700 ">
            <p className="m-4 text-[14px] md:text-[18px] lg:text-2xl transition-transform duration-2000 ease-in-out hover:scale-105  ">
              "Explore more and discover everything that I have prepared for
              you."
            </p>
            <button className="m-4 w-10 md:w-10 md:h-10   lg:w-15 lg:h-15  text-[15px] bg-amber-300 hover:bg-amber-950 hover:text-amber-100 border-1 border-amber-50 rounded-[8px]">
              <p className="text-2xl">Go</p>
            </button>
          </div>
        </section>
        {/* <section
          id="wellcome"
          className="h-auto md:h-screen lg:h-screen bg-[#240046]  lg:scroll-mt-0  grid md:grid-cols-2 lg:grid-cols-3 gap-2 "
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
            <button className="bg-[#7B2CBF] p-4 w-15 h-15 rounded-2xl font-bold text-[#E0AAFF] transition-transform duration-1000 ease-in-out hover:scale-[1.1] hover:bg-[#C77DFF] hover:text-[#240046] border-[1px] border-gray-300  shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] ">
              Go
            </button>
          </div>

          <div
            className="bg-[#C77DFF]   flex  justify-center  md:p-8  md:m-6   lg:m-6 ml-6 mr-6 rounded-2xl p-6 transition-transform duration-1000 ease-in-out hover:scale-[1.02] border-[1px] border-gray-300  shadow-md 
          hover:shadow-[0_0_10px_2px_rgba(200,200,200,0.8)]  "
          >
            <div
              ref={contentRef}
              className="border-1 rounded-2xl md:border-none md:bg-transparent lg:bg-transparent border-gray-50  flex items-center bg-amber-300/20 w-55 overflow-x-auto  scroll-smooth span-x span-mandatory no-scrollbar md:snap-none md:scroll-auto  md:overflow-x-visible  md:w-full lg:w-full md:h-full lg:h-full md:grid lg:grid md:grid-cols-2 lg:grid-cols-2   gap-4 h-64 "
            >
              <div className="m-2 p-7 flex items-center justify-center md:col-span-2   lg:col-span-2 w-50 h-45 md: md:w-auto md:h-auto object-cover flex-none  md:flex lg:flex  border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700">
                <img
                  src="/img/im2.png"
                  alt=""
                  className="w-full h-full  m-2 cover transition-transform duration-1000 ease-in-out hover:scale-[1.1] border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] "
                />
              </div>

              <div className="m-4 w-47 h-47 md:max-w-[150px]  md:max-h-[150px] p-4 flex-none object-cover md:flex lg:flex items-center justify-center  border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700 ">
                <img
                  src="/img/im1.jpg"
                  alt=""
                  className="w-full h-full m-1 cover transition-transform duration-1000 ease-in-out hover:scale-[1.1] border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] "
                />
              </div>

              <div className="m-4 w-47 h-47 md:max-w-[150px]  md:max-h-[150px] p-4 object-cover flex-none md:flex lg:flex items-center justify-center border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-700 ">
                {" "}
                <img
                  src="/img/im3.png"
                  alt=""
                  className=" w-full h-full  m-1 cover  transition-transform duration-1000 ease-in-out hover:scale-[1.1] border-[1px] border-gray-300 rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] "
                />
              </div>
            </div>
            <div className="block md:hidden lg:hidden">
              <button onClick={() => (contentRef.current.scrollLeft -= 235)}>
                <i className="bxr  bx-skip-previous-circle   text-4xl md:text-5xl lg:text-6xl  "></i>{" "}
              </button>
              <button onClick={() => (contentRef.current.scrollLeft += 235)}>
                <i className="bxr  bx-skip-next-circle   text-4xl md:text-5xl lg:text-6xl  "></i>{" "}
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
        </section> */}
      </div>
    </>
  );
}

export default Main;
