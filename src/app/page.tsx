// Flow
import React from "react";
// Prismic
import { createClient } from "@/prismicio";
// Components
import TestimonialSection from "./components/TestimonialSection";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";

const page = async () => {
  const client = createClient();
  const home = await client.getSingle("home");

  return (
    <div className="p-0 m-0 mb-5 px-4 uppercase">
      <HeaderSection homeData={home} />
      <AboutSection homeData={home} />
      <TestimonialSection homeData={home} />
    </div>
  );
};

export default page;
