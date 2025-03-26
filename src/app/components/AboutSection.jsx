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
        <li>Express</li>
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
        <li>
          Formado em Análise Desenvolvimento de Sistema{" "}
          <li className="text-[#4C89F9]">(Unopar 2020) </li>
        </li>
        <li>
          Pós-Graduação em Engenharia de Software{" "}
          <span className="text-[#4C89F9]">(Unopar 2023) </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Estágio",
    id: "Estágio",
    content: (
      <ul className="list-disc pl-2">
        <li>
          {" "}
          <span className="text-[#4C89F9]"> Desenvolvedor Full Stack </span> ·
          Estágio FACULDADE PETRA LTDA · Estágio Agosto de 2024 - Janeiro de
          2025 · 6 meses Juiz de Fora, Minas Gerais, Brasil · Híbrido{" "}
        </li>
        <br></br>
        <li>
          <span className="text-[#4C89F9]">Desenvolvedor Full Stack </span>·
          Estágio RARUS - Escola de Psicanálise · Estágio março de 2024 - agosto
          de 2024 · 6 meses Juiz de Fora, Minas Gerais, Brasil · Híbrido
        </li>
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
];

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
            Iniciei minha trajetória como Desenvolvedor Full Stack na <span className="text-[#4C89F9]"> RARUS -
            Escola de Psicanálise </span>, onde fui responsável pelo desenvolvimento de
            aplicações web híbridas, utilizando React.js no frontend e Node.js
            no backend. Durante esse período, aprimorei minhas habilidades em
            JavaScript, Express e MySQL, além de trabalhar com estilização
            utilizando Bulma CSS. Posteriormente, atuei na <span className="text-[#4C89f9]">Faculdade PETRA LTDA</span>,
            também como Desenvolvedor Full Stack, onde continuei aprimorando
            minhas habilidades em desenvolvimento web, participando de projetos
            voltados para o ambiente acadêmico e colaborando em soluções
            inovadoras para a instituição. Meu foco é criar aplicações
            performáticas e escaláveis, sempre buscando aprender novas
            tecnologias e aplicar boas práticas de desenvolvimento.
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

            <TabButton
              selectTab={() => handleTabChange("Estágio")}
              active={tab === "Estágio"}
            >
              {" "}
              internship{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
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
