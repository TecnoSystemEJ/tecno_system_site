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
    <div>
      <HeaderSection homeData={home} />
      <AboutSection homeData={home} />
      <TestimonialSection homeData={home} />
    </div>
  );
};

export default page;
