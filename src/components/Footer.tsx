import React, { ReactNode } from "react";
import { createClient } from "@/prismicio";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PrismicNextLink } from "@prismicio/next";

const ICONS_MAP: Record<string, ReactNode> = {
  "1": <MdEmail />,
  "2": <FaWhatsapp />,
  "3": <FaFacebookSquare />,
  "4": <FaInstagram />,
};

const Footer = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");

  console.log(ICONS_MAP["1"]);

  return (
    <footer className="flex w-full py-8 bg-primary-main ">
      <div className="flex flex-row justify-between md:mx-auto w-full h-full md:container sm:flex  p-4">
        <div className="flex flex-col w-1/2">
          {footer.data.social.map(({ label, link, icon }, index) => (
            <PrismicNextLink
              field={link}
              className="flex items-center gap-2 text-white text-xl"
              key={index}
            >
              {ICONS_MAP[icon]}
              <div className="flex flex-row gap-5">{label}</div>
            </PrismicNextLink>
          ))}
        </div>
        <div className="flex flex-col w-1/2 p-10">tesda</div>
      </div>
    </footer>
  );
};

export default Footer;
