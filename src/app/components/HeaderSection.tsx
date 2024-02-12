import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
//components
import TextCard from "@/components/TextCard";
import NavBar from "@/components/NavBar";
import CustomImage from "@/components/CustomImage";
import Button from "@/components/Button";
import List from "@/components/List";


type Props = {
  homeData: AllDocumentTypes;
};

const HeaderSection = (props: Props) => {
  const text1 = props.homeData.data;

  return (
    <div className="bg-gray-alt">
      <NavBar />

      <div className="flex flex-col text-xl text-red-500 text-righteous font-primary mb-3 text-[24px] mt-14 uppercase">
        tecnosystem
      </div>

      <div className="font-primary text-black text-[28px] font-medium mb-8 uppercase">
        transformando ideias em{" "}
        <div className="font-primary text-red-500 text-[28px] font-medium inline uppercase">
        tecnologia
        </div>
      </div>

      <div>
        <List text="do conceito à realidade digital" />
        <List text="solução de software personalizadas" />
        <List text="inovação na ponta dos seus dedos" />
        <List text="sua visão, nossa experiência" />
      </div>

      <div className="flex flex-row justify-between my-4">
        <Button
          href="/contato"
          styles="primary"
          name="Entre em contato"
        >
        </Button>

        <Button
          href="/contato"
          styles="secondary"
          name="Saiba mais"
        >
        </Button>
      </div>

      <div className="mb-8">
        <TextCard
          title="COMO AJUDAMOS NOSSOS CLIENTES"
          subtitle="E VAMOS AJUDAR VOCÊ"
        />
      </div>

      <div className="flex w-full h-[220px] mb-12">
        <CustomImage src={"/homeicons/retangle.svg"} alt="Burger" />
      </div>

      <div className="flex w-full h-[220px]">
        <CustomImage src={"/homeicons/retangle.svg"} alt="Burger" />
      </div>

    </div>
  );
};

export default HeaderSection;
