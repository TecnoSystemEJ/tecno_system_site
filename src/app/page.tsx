// Flow
import React from "react";
// Prismic
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Button from "@/components/Button";
import Image from "next/image";
import ImageComponent from "@/components/ImageComponent";

const page = async () => {
  const client = createClient();
  const home = await client.getSingle("home");

  console.log(home.data.image_1);

  return (
    <div>
      <PrismicRichText field={home.data.text_1} />

      <div className="flex fle-row justify-between">
        <Button name="Entre em contato" styles="primary" href="/" />
        <Button name="Saiba mais" styles="secondary" href="/" />
        <ImageComponent
          src={home.data.image_1.url!}
          alt={home.data.image_1.alt!}
          width={home.data.image_1.dimensions!.width}
          height={home.data.image_1.dimensions!.height}
        />
      </div>
    </div>
  );
};

export default page;
