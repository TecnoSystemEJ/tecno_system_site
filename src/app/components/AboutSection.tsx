import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TextCard from "@/components/TextCard";
import SliderComponent from "@/components/SliderComponent";

interface Props {
  homeData: AllDocumentTypes;
}

const AboutSection = ({}: Props) => {
  return (
    <div className="bg-gray-alt uppercase m-0 flex flex-col overflow-x-hidden">
      <h2 className="text-3xl  font-primary text-primary-main my-3 font-400">
        tecnosystem
      </h2>
      <p className="font-secondary text-black text-sm font-400 mb-8">
        com base em são paulo, e escritórios na espanha e portugal, temos uma
        atuação internacional. nossa paixão é transformar negócios por meio da
        comunicação, aplicando estratégias inovadoras e contando com uma equipe
        altamente capacitada, colaborando para criar experiências envolventes
        que impulsionam o engajamento e a conversão.
      </p>
      <p className="font-secondary text-black text-sm font-400 mb-8">
        com base em são paulo, e escritórios na espanha e portugal, temos uma
        atuação internacional. nossa paixão é transformar negócios por meio da
        comunicação, aplicando estratégias inovadoras e contando com uma equipe
        altamente capacitada, colaborando para criar experiências envolventes
        que impulsionam o engajamento e a conversão.
      </p>

      <TextCard
        title="projetos que temos orgulho!"
        subtitle="e vamos ajudar você"
      />
      <SliderComponent
        cards={[
          {
            image: "image.png",
            title: "Medlembre",
            text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
          },
          {
            image: "image.png",
            title: "Medlembre",
            text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
          },
          {
            image: "image.png",
            title: "Medlembre",
            text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
          },
          {
            image: "image.png",
            title: "Medlembre",
            text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
          },
          {
            image: "image.png",
            title: "Medlembre",
            text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
          },
          {
            image: "image.png",
            title: "Medlembre",
            text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
          },
        ]}
      />
    </div>
  );
};

export default AboutSection;
