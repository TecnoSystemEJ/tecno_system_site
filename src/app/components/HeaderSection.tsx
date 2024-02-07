import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TextCard from "@/components/TextCard";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import CustomImage from "@/components/CustomImage";

type Props = {
  homeData: AllDocumentTypes;
};

const HeaderSection = (props: Props) => {
  const text1 = props.homeData.data;

  return (
    <div className="bg-gray-alt">
      <NavBar />

      <div className="flex flex-col text-xl text-red-500 text-righteous font-primary mb-3 text-[24px] mt-14">
        TECNOSYSTEM
      </div>

      <div className="font-primary text-black text-[28px] font-medium mb-8">
        TRANSFORMANDO IDEIAS EM{" "}
        <div className="font-primary text-red-500 text-[28px] font-medium inline">
          TECNOLOGIA
        </div>
      </div>

      <div className="font-secondary text-black text-xs text-[14px] flex items-center font-normal	mb-4">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />
        DO CONCEITO À REALIDADE DIGITAL
      </div>

      <div className="font-secondary text-black text-xs text-[14px]  flex items-center font-normal mb-4">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />
        SOLUÇÃO DE SOFTWARE PERSONALIZADAS
      </div>

      <div className="font-secondary text-black text-xs text-[14px]  flex items-center font-normal mb-4">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />
        INOVAÇÃO NA PONTA DOS SEUS DEDOS
      </div>

      <div className="font-secondary text-black text-xs text-[14px] flex items-center font-normal mb-8">
        <Image
          src={"/homeicons/glyph.svg"}
          alt="Logo"
          height={15}
          width={15}
          className="mr-1"
        />
        SUA VISÃO, NOSSA EXPERIÊNCIA
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-red-500 text-white px-4 py-2 font-semibold mb-8 transition-opacity duration-300 hover:opacity-75 w-[198px] h-[40px] top-[439px] left-[21px] rounded-[10px] gap-[10px] text-lg justify-center flex items-center">
          Entre em contato
        </button>

        <button className="bg-gray-50 text-red-500 px-4 py-2 rounded-md font-semibold mb-4 border-2 border-red-500 transition-opacity duration-300 hover:opacity-75 w-[137px] h-[40px] top-[439px] left-[20px] text-lg justify-center flex items-center">
          Saiba mais
        </button>
      </div>

      <TextCard
        title="COMO AJUDAMOS NOSSOS CLIENTES"
        subtitle="E VAMOS AJUDAR VOCÊ"
      />
      <div className="mb-8"> </div>
      <Image
        src={"/homeicons/retangle.svg"}
        alt="Burger"
        height={300}
        width={350}
      />
      <div className="mb-12"> </div>
      <div className="flex w-full h-[220px]">
        <CustomImage src={"/homeicons/retangle.svg"} alt="Burger" />
      </div>
    </div>
  );
};

export default HeaderSection;
