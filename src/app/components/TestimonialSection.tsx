"use client";
import React, { useState } from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import TestimonialCard from "@/components/TestimonialCard";
import Input from "@/components/Input";
import TextCard from "@/components/TextCard";
import Button from "@/components/Button";

interface Props {
  homeData: AllDocumentTypes;
}

const names = ["Luigi", "João", "Luis", "Mateus"];

const TestimonialSection = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setTel("");
  };

  return (
    <div className="flex flex-col gap-12">
      <TextCard
        title=" Depoimentos dos nossos clientes!"
        subtitle=" com seus negócios transformados"
      />
      <div className="flex flex-col gap-8">
        {names.map((name, index) => (
          <TestimonialCard score={4} key={index} name={name} />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        
        <h1 className="uppercase text-primary-main font-primary text-2xl">
          Entre em contato
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            placeholder="(75) 999120-2371"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
         <Button name="Enviar" href="" styles="primary" textcenter="center" size="sm"/>
        </form>
      </div>
    </div>
  );
};

export default TestimonialSection;
