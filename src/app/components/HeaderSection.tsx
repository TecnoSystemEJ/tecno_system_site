import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TextCard from "@/components/TextCard";
import NavBar from "@/components/NavBar";
import Image from "next/image";

type Props = {
  homeData: AllDocumentTypes;
};

const HeaderSection = (props: Props) => {
  const text1 = props.homeData.data;

  return (
    <div className="bg-gray-alt p-4">
      <NavBar></NavBar>

      <div className="flex flex-col text-xl text-red-500 text-righteous font-primary">TECNOSYSTEM</div>

      <div className="font-secondary text-black text-2xl font-medium mb-8">
        TRANSFORMANDO IDEIAS EM{" "}
        <div className="font-primary text-red-500 text-2xl font-medium inline">
          TECNOLOGIA
        </div>
      </div>

      <div className="font-secondary text-black text-xs font-medium flex items-center">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />
        DO CONCEITO À REALIDADE DIGITAL
      </div>


      <div className="font-secondary text-black text-xs font-medium flex items-center">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />SOLUÇÃO DE SOFTWARE PERSONALIZADAS</div>

            <div className="font-secondary text-black text-xs font-medium flex items-center">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />INOVCAÇÃO NA PONTA DOS SEUS DEDOS</div>

            <div className="font-secondary text-black text-xs font-medium flex items-center">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />SUA VISÃO, NOSSA EXPERIÊNCIA</div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium mb-8 transition-opacity duration-300 hover:opacity-75">Entre em contato</button>
        <button className="bg-gray-50  text-red-500 px-4 py-2 rounded-md font-medium mb-8 border-2 border-red-500 transition-opacity duration-300 hover:opacity-75">
          Saiba mais
        </button>
      </div>

      <TextCard
        title="COMO AJUDAMOS NOSSOS CLIENTES"
        subtitle="E VAMOS AJUDAR VOCÊ"
      />

      <Image
          src={"/homeicons/retangle.svg"}
          alt="Burger"
          height={300}
          width={300}
        />
        
      <Image
          src={"/homeicons/retangle.svg"}
          alt="Burger"
          height={300}
          width={300}
        />

    </div>
  );
};

export default HeaderSection;
