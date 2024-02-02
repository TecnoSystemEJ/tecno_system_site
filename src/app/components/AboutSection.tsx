import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TextCard from "@/components/TextCard";
import Card from "@/components/Card";

type Props = {
  homeData: AllDocumentTypes;
};

const AboutSection = ({ homeData }: Props) => {
  //const aboutTitle = homeData.data.about_title;
  //const about_p1 = homeData.data.about_p1;
  //const about_p2 = homeData.data.about_p2;
  //const textCard2Title = homeData.data.text_card_2_title;
  //const textCard2Subtitle = homeData.data.text_card_2_subtitle;
  //console.log(aboutSectionText);
  return (
    <div className="bg-gray-alt ">
      <h2 className="p-4 text-2xl font-primary text-primary-main my-4">
        TECNOSYSTEM{/*aboutTitle*/}
      </h2>
      <p className="px-4 font-secondary text-black text-xs font-medium mb-8">
        COM BASE EM SÃO PAULO, E ESCRITÓRIOS NA ESPANHA E PORTUGAL, TEMOS UMA
        ATUAÇÃO INTERNACIONAL. NOSSA PAIXÃO É TRANSFORMAR NEGÓCIOS POR MEIO DA
        COMUNICAÇÃO, APLICANDO ESTRATÉGIAS INOVADORAS E CONTANDO COM UMA EQUIPE
        ALTAMENTE CAPACITADA, COLABORANDO PARA CRIAR EXPERIÊNCIAS ENVOLVENTES
        QUE IMPULSIONAM O ENGAJAMENTO E A CONVERSÃO.{/*about_p1*/}
      </p>
      <p className="px-4 font-secondary text-black text-xs font-medium">
        COM BASE EM SÃO PAULO, E ESCRITÓRIOS NA ESPANHA E PORTUGAL, TEMOS UMA
        ATUAÇÃO INTERNACIONAL. NOSSA PAIXÃO É TRANSFORMAR NEGÓCIOS POR MEIO DA
        COMUNICAÇÃO, APLICANDO ESTRATÉGIAS INOVADORAS E CONTANDO COM UMA EQUIPE
        ALTAMENTE CAPACITADA, COLABORANDO PARA CRIAR EXPERIÊNCIAS ENVOLVENTES
        QUE IMPULSIONAM O ENGAJAMENTO E A CONVERSÃO.{/*about_p2*/}
      </p>
      <TextCard
        title="PROJETOS QUE TEMOS ORGULHO!"
        subtitle="E VAMOS AJUDAR VOCÊ"
      />
      <Card />
    </div>
  );
};

export default AboutSection;
