// Flow
import React from "react";
// Prismic
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

const page = async () => {
  const client = createClient();
  const home = await client.getSingle("home");

  return (
    <div className="font-secondary">
      <PrismicRichText field={home.data.text_1} />
    </div>
  );
};

export default page;
