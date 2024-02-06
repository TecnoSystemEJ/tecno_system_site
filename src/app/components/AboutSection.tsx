import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TextCard from "@/components/TextCard";
import SliderComponent from "@/components/SliderComponent";

type Props = {
  homeData: AllDocumentTypes;
};

const AboutSection = ({ homeData }: Props) => {
  return (
    <div className="bg-gray-alt m-0">
      <h2 className="px-4 text-3xl font-primary text-primary-main my-3 font-400">
        TECNOSYSTEM
      </h2>
      <p className="px-4 font-secondary text-black text-sm font-400 mb-8">
        COM BASE EM SÃO PAULO, E ESCRITÓRIOS NA ESPANHA E PORTUGAL, TEMOS UMA
        ATUAÇÃO INTERNACIONAL. NOSSA PAIXÃO É TRANSFORMAR NEGÓCIOS POR MEIO DA
        COMUNICAÇÃO, APLICANDO ESTRATÉGIAS INOVADORAS E CONTANDO COM UMA EQUIPE
        ALTAMENTE CAPACITADA, COLABORANDO PARA CRIAR EXPERIÊNCIAS ENVOLVENTES
        QUE IMPULSIONAM O ENGAJAMENTO E A CONVERSÃO.
      </p>
      <p className="px-4 font-secondary text-black text-sm font-400 mb-8">
        COM BASE EM SÃO PAULO, E ESCRITÓRIOS NA ESPANHA E PORTUGAL, TEMOS UMA
        ATUAÇÃO INTERNACIONAL. NOSSA PAIXÃO É TRANSFORMAR NEGÓCIOS POR MEIO DA
        COMUNICAÇÃO, APLICANDO ESTRATÉGIAS INOVADORAS E CONTANDO COM UMA EQUIPE
        ALTAMENTE CAPACITADA, COLABORANDO PARA CRIAR EXPERIÊNCIAS ENVOLVENTES
        QUE IMPULSIONAM O ENGAJAMENTO E A CONVERSÃO.
      </p>

      <TextCard
        title="PROJETOS QUE TEMOS ORGULHO!"
        subtitle="E VAMOS AJUDAR VOCÊ"
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
        ]}
      />
    </div>
  );
};

export default AboutSection;
