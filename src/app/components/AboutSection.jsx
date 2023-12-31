"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
   title: "Skills",
   id: "skills",
   content: (
    <ul className="list-disc pl-2">
      <li>Javascript</li>
      <li>React.js</li>
      <li>Vue.js</li>
      <li>Next.js</li>
      <li>MongoDB</li>
      <li>MySQL</li>
    </ul>
   ),
  },
  {
    title: "Education",
    id: "education",
    content: (
     <ul className="list-disc pl-2">
       <li>Formado em Análise Desenvolvimento de Sistema <li className="text-[#4C89F9]">(Unopar 2020) </li></li>
       <li>Pós-Graduação em Engenharia de Software <span className="text-[#4C89F9]">(Unopar 2023) </span></li>
     </ul>
    ),
   },
   {
    title: "Certifications",
    id: "certifications",
    content: (
     <ul className="list-disc pl-2">
       <li>Fundamentos de Gestão de Projetos - Linkedin</li>
       <li>Javascript - Udemy</li> 
       <li>Entre Outros...</li> 
     </ul>
    ),
   },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="images/Website.png" alt="" width={200} height={200} />
        <div className="mt-4 mb:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Sou um Desenvolvedor Front-end com base em Javascript, React.js,
            Vue.js e Banco de dados apaixonado por código e Tecnologia. Me sinto
            confortável trabalhando sozinho ou em equipes aplicando minhas
            competências em Desenvolvimento de software para desenvolver
            soluções de qualidade. Acredito que a inovação e a criatividade são
            fundamentais para o sucesso em produtos tecnológicos modernos.
            Atualmente estou interessado em trabalhar em projetos de software
            envolvendo aplicações baseadas em Front-end.
          </p>
          <div className="flex justify-start flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}
            >
             {" "}
             Certifications{" "}
             </TabButton>

      
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
