import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import TextCard from "@/components/TextCard";
import CustomImage from "@/components/CustomImage";
import Button from "@/components/Button";
import List from "@/components/List";


export type HeaderSectionProps =
  SliceComponentProps<Content.HeaderSectionSlice>;


const HeaderSection = ({ slice }: HeaderSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

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

    </section>
  );
};

export default HeaderSection;
