"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Esse foi meu primeiro portfólio em React",
    image: "/images/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Site que desenvolvi para aprender",
    image: "/images/3.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Website  Agência",
    image: "/images/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Consumindo Api",
    image: "/images/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Dashboard em React",
    image: "/images/5.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Projeto pessoal de pontos turísticos da cidade (Juiz de fora) feito Vue.js",
    image: "/images/6.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <p className="text-center text-1xl text-[#4C89F9] mb-2 md:mb-3">
        Todos projetos estão Github
      </p>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
