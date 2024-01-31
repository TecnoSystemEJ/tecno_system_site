// Flow
import React from "react";
// Prismic
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Button from "@/components/Button";
import Depoimentos from "@/components/Depoimentos";

const page = async () => {
  const client = createClient();
  const home = await client.getSingle("home");

  return (
    <div>
      <PrismicRichText field={home.data.text_1} />

      <div className="flex fle-row justify-between">
        <Button name="Entre em contato" styles="primary" href="/" />
        <Button name="Saiba mais" styles="secondary" href="/" />
      </div>
      <div>
        <Depoimentos/>
      </div>
    </div>
  );
};

export default page;
