"use client";

import React from "react";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16" >
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-9 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4C89F9] ">
              Hi, I'm {""}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Luan",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Desenvolvedor Full Stack",
                1000,
                "Web development",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl">
            <span className="text-[#4C89F9]">Formado</span> Em Análise
            Desenvolvimento De Sistema (Unopar 2020)
            <br />
            <span className="text-[#4C89F9]">Pós-Graduação</span> Em Engenharia
            de Software (Unopar 2023)
          </p>
          <div>
            <a
              href="https://github.com/LuanJSX?tab=repositories"
              target="_blank"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#4C89F9] hover:bg-slate-200 text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/luan-batista-9223a41a1/"
              target="_blank"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-8 bg-gradient-to-br from-[#4C89F9] hover:bg-slate-200 text-white"
            >
              Linkedin
            </a>

            <button className="px-1 mr-1 py-1 sm:w-fit w-full rounded-full bg-gradient-to-br from-[#4C89F9 hover:bg-slate-800 text-white border border-[#4C89F9] mt-3">
              <a href="https://drive.google.com/file/d/1YBH4uWLWj7Oho7zwASUawi9HyLpXMhPG/view?usp=sharing"
              target="_blank" className="block mr-3 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
            <Image
              src="/images/hero1.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;