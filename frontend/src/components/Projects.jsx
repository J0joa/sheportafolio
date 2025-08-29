import { form } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

export default function Projects() {
  const img = [
    {
      img: "/img/font.jpg",
      name: "Api Wather",
      url: "https://openweathermap.org/",
      id: 1,
      description:
        "Aplicación que muestra el clima actual en cualquier ciudad del mundo usando datos en tiempo real.",
    },
    {
      img: "/img/pokedex.jpg",
      name: "Api Pokedex",
      url: "https://pokeapi.co/",
      id: 2,
      description:
        "Explora información detallada sobre Pokémon, incluyendo estadísticas, tipos y evoluciones.",
    },
    {
      img: "/img/ecommerce.png",
      name: "Api E-Commerce",
      url: "https://www.shopify.com/",
      id: 3,
      description:
        "Tienda en línea con carrito de compras, gestión de productos y pagos simulados.",
    },
    {
      img: "/img/portafolio.png",
      name: "Api portafolio",
      url: "https://www.behance.net/",
      id: 5,
      description:
        "Portafolio personal interactivo con proyectos destacados y diseño moderno.",
    },
    {
      img: "/img/choppy.png",
      name: "Api choppy",
      url: "https://www.mercadolibre.com/",
      id: 6,
      description:
        "Plataforma de compras con búsqueda rápida, filtros avanzados y sistema de usuarios.",
    },
    {
      img: "/img/tarject.png",
      name: "Api Tarjects",
      url: "https://www.canva.com/cards/templates/",
      id: 7,
      description:
        "Generador dinámico de tarjetas personalizadas con diseño adaptable.",
    },
    {
      img: "/img/messajes.png",
      name: "Api messajes",
      url: "https://web.whatsapp.com/",
      id: 8,
      description:
        "Sistema de mensajería en tiempo real con soporte para múltiples usuarios.",
    },
    {
      img: "/img/granja.png",
      name: "Site web Granja",
      url: "https://www.agromarketday.com/",
      id: 9,
      description:
        "Página informativa para granjas con catálogo de productos y contacto directo.",
    },
  ];

  const [seeExp, setSeeExp] = useState(false);

  const [likes, setLikes] = useState(() => {
    const initial = {};
    img.forEach((item) => (initial[item.id] = 0));
    return initial;
  });

  const [disLike, setDislike] = useState(() => {
    const initial = {};

    img.forEach((item) => (initial[item.id] = 0));
    return initial;
  });

  const [view, setView] = useState(0);

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDislike = (id) => {
    setDislike((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const contentRef = useRef(null);

  return (
    <section
      id="projects"
      className="lg:snap-start lg:snap-always lg:h-screen bg-[#7400B8] lg:grid lg:grid-cols-2 lg:items-center lg:justify-center 
      md:grid md:grid-cols-1 md:items-center md:relative md:h-screen
      h-auto"
    >
      <div
        className="lg:bg-[#0077B6] group lg:w-full lg:h-full lg:flex  lg:items-center  overflow-hidden  lg:relative
      md:relative
      relative "
      >
        <div
          className="  absolute z-7 w-full lg:h-full bg-[#22577A]/70
           h-full"
        ></div>
         <a  href="#wellcome" className="absolute z-8 m-auto left-[25vw] top-[75vh] bg-emerald-300 p-4 rounded-[5px] font-bold text-blue-950 hover:text-blue-300 hover:bg-blue-950  ">
            Back
          </a> 

        <div>
          <h2
            className="absolute z-7  lg:top-50 text-amber-100 lg:text-5xl
        md:text-3xl md:top-20
        top-18 left-10"
          >
            "Un programador que escriba un código limpio, entiende perfectamente
            el problema antes de escribir el código"
          </h2>
         

          
        </div>

        

        <img
          src="/img/font.jpg"
          alt=""
          className=" lg:w-full lg:h-full lg:object-cover transition-transform duration-500 ease-in-out  group-hover:scale-[1.1]
                      md:w-full md:h-[38vh]"
        />
      </div>

      <div
        className="lg:m-2 lg:h-full  lg:overflow-y-auto lg:scroll-y-bar lg:scroll-smooth custom-scroll 
                    md:scroll-hidden   md:items-center 
                    scroll-hidden relative "
      >
        <h1
          className=" lg:text-4xl font-bold p-4 text-center
                        md:text-3xl md:mt-5"
        >
          {" "}
          Projects{" "}
        </h1>
        <div className="pointer-events-none absolute right-0 inset-y-0 left-0 lg:w-0  md:w-100 w-45 bg-gradient-to-r  from-[#240046]/100 to-transparent   z-80"></div>
        <div className="pointer-events-none absolute  inset-y-0 right-0 lg:w-0  md:w-100 w-45 bg-gradient-to-l  from-[#240046]/100 to-transparent   z-80"></div>{" "}
        <ul
          ref={contentRef}
          className="relative lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:items-center lg:gap-2  lg:p-2 lg:border-0
                        md:grid md:grid-flow-col md:overflow-hidden md:w-full md:overflow-x-auto md:scroll-smooth md:gap-2 hide-scrollbar md:m-auto md:border-fuchsia-200 md:border-3 md:rounded-[5px] md:p-4
                        grid grid-flow-col overflow-hidden w-[80vw] overflow-x-auto scroll-smooth gap-2 

                        m-auto border-fuchsia-200 border-3 rounded-[5px] p-4 "
        >
         {img.map((i) => (
            <li
              key={i.id}
              className="overflow-hidden relative  group border border-blue-700 rounded-t-2xl transition-transform duration-700 shadow hover:shadow-[0_0_10px_rgba(101,53,255,1)]  lg:relative lg:h-full lg:w-full lg:flex lg:flex-col lg:items-center
              md:w-[200px] w-[200px]  "
            >
              <div className="h-[200px] w-full ">
                <img
                  src={i.img}
                  alt=""
                  className="lg:w-full lg:h-full rounded-t-2xl transition-transform duration-500 ease-in-out overflow-hidden  lg:object-cover group-hover:opacity-50 group-hover:scale-[1.04]
                            md:w-[400px] md:h-[200px] md:object-cover
                            w-[400px] h-[200px] object-cover "
                />

                <div
                  className="absolute bottom-0 z-20 lg:h-[10vh] p-2 lg:text-[10px] bg-[#0077B6]  text-amber-100 lg:translate-y-60 hidden group-hover:block lg:group-hover:-translate-y-[]  
               md:text-[11px] md:h-[14vh] md:group-hover:-translate-y-[]
               text-[12px] group-hover:-translate-y-[74px]
               "
                >
                  <p className="">{i.description}</p>
                </div>
              </div>

              <div className="text-amber-100 bg-[#240046] w-full grid grid-cols-2 items-center">
                <p
                  className="lg:text-[10px]
                 md:text-[10px] p-2
                 text-[10px]"
                >
                  {i.name}
                </p>

                <div className=" flex flex-row items-center gap-1  p-1">
                  <i
                    onClick={() => handleLike(i.id)}
                    className="bxr  bx-like  text-cyan-300  text-[11px]"
                  >
                    {likes[i.id]}
                  </i>
                  <i
                    onClick={() => handleDislike(i.id)}
                    className="bxr  bx-dislike  text-cyan-300 text-[11px]"
                  >
                    {disLike[i.id]}
                  </i>

                  <i className="bxr  bx-eye text-emerald-400  text-[11px] p-1">
                    {view}
                  </i>
                </div>

                <a
                  className="m-2 bg-amber-600 rounded-2xl p-1 w-[60px] flex flex-col items-center"
                  href={i.url}
                >
                  <button>Go</button>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div
          className="lg:hidden 
                        md:flex md:flex-row md:items-center md:justify-center
                         flex flex-row items-center justify-center"
        >
          <button onClick={() => (contentRef.current.scrollLeft -= 206)}>
            <i className="bxr  bx-arrow-left-stroke-circle text-5xl relative bg-amber-200 m-2 rounded-2xl hover:bg-amber-100 hover:text-amber-600"></i>
          </button>{" "}
          <button onClick={() => (contentRef.current.scrollLeft += 206)}>
            <i className="bxr  bx-arrow-right-stroke-circle text-5xl relative bg-amber-200 m-2 rounded-2xl hover:bg-amber-100 hover:text-amber-600"></i>{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
