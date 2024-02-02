import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TestimonialCard from "@/components/TestimonialCard";


type Props = {
  homeData: AllDocumentTypes;
};

const names = ['Luigi', 'João', 'Luis', 'Mateus']

const TestimonialSection = (props: Props) => {
  return <div>
    <div className="flex justify-center items-center gap-2 mt-2">
      <div className="border-2 border-primary-main h-16"></div>
      <h1 className="uppercase text-base font-semibold "><span className="font-bold">Depoimentos dos nossos clientes </span>
com seus negócios transformados</h1>
    </div>
    <div>
    {names.map((name, index) => (
        <TestimonialCard key={index} name={name}/>
      ))}
    </div>
   <div className="mt-10">
    <h1 className="uppercase text-primary-main font-bold text-2xl">Entre em contato</h1>
    <div className="mt-8">
      <form action="" className="flex flex-col gap-4">
      <input
        type="text"
        className="border border-primary-main px-4 py-2 h-14 rounded-xl"
        placeholder="Nome"
      />
      <input
        type="email"
        className=" border border-primary-main h-14 rounded-xl px-4 py-2"
        placeholder="Email"
      />
      <input
        type="tel"
        className=" border border-primary-main h-14 rounded-xl px-4 py-2"
        placeholder="Número de Telefone"
      />
      <button className=" bg-primary-main text-white h-12 rounded-md hover:bg-primary-main transition duration-300 ease-in-out">
        Enviar
      </button>
      </form>
      
    </div>
   </div>
  </div>;
};

export default TestimonialSection;
