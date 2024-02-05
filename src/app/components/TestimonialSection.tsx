'use client'
import React, { useState } from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TestimonialCard from "@/components/TestimonialCard";
import Input from "@/components/Input";

type Props = {
  homeData: AllDocumentTypes;
};

const names = ['Luigi', 'João', 'Luis', 'Mateus']

const TestimonialSection = (props: Props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(tel)
    
    
    setName('')
    setEmail('')
    setTel('')
  }


  return <div>
    <div className="flex justify-center items-center gap-2 mt-2">
      <div className="border-2 border-primary-main h-16"></div>
      <h1 className="uppercase text-base font-semibold "><span className="font-bold">Depoimentos dos nossos clientes </span>
com seus negócios transformados</h1>
    </div>
    <div>
    {names.map((name, index) => (
        <TestimonialCard score={4} key={index} name={name}/>
      ))}
    </div>
   <div className="mt-10">
    <h1 className="uppercase text-primary-main font-bold text-2xl">Entre em contato</h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
      <Input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
      <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type='tel' placeholder='(75) 999120-2371' value={tel} onChange={(e) => setTel(e.target.value)}/>
      <button type="submit" className=" mt-8 bg-primary-main text-white h-12 rounded-md hover:bg-primary-main transition duration-300 ease-in-out">
        Enviar
      </button>
      
      </form>
     

   </div>
  </div>;
};

export default TestimonialSection;
