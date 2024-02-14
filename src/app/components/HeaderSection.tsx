import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
//components
import TextCard from "@/components/TextCard";
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
      <header className="flex flex-col mb-4 gap-y-7">
        <div className="flex flex-col gap-4 font-primary font-normal">
          <h3 className=" text-2xl text-primary-main">Tecnosystem</h3>
          <h1 className="text-3xl">
            transformando ideias em
            <span className="text-primary-main"> tecnologia</span>
          </h1>
        </div>

        <ul className="flex flex-col gap-2">
          <List text="do conceito à realidade digital" />
          <List text="solução de software personalizadas" />
          <List text="inovação na ponta dos seus dedos" />
          <List text="sua visão, nossa experiência" />
        </ul>

        <div className="flex flex-row justify-between">
          <Button href="/contato" styles="primary" name="Entre em contato" />
          <Button href="/contato" styles="secondary" name="Saiba mais" />
        </div>
      </header>

      <div className="flex flex-col gap-y-8">
        <TextCard
          title="COMO AJUDAMOS NOSSOS CLIENTES"
          subtitle="E VAMOS AJUDAR VOCÊ"
        />

        <div className="flex flex-col gap-10">
          <div className="flex w-full h-[220px]">
            <CustomImage src={"/homeicons/retangle.svg"} alt="Burger" />
          </div>

          <div className="flex w-full h-[220px]">
            <CustomImage src={"/homeicons/retangle.svg"} alt="Burger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
