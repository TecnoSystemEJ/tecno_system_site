"use client";
import React, { useState } from "react";
import Input from "./Input";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="flex flex-col gap-4 md:mt-20">
      <h2 className="text-3xl font-primary text-primary-main my-3 font-400">
        Entre em contato
      </h2>
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
          type="phone"
          placeholder="(75) 999120-2371"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="font-secondary font-normal mt-8 bg-primary-main text-gray-300 text-sm h-12 rounded-md hover:bg-primary-main transition duration-300 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
