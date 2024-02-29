import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const FooterLinks = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    <ul className="md:mx-auto w-full h-[40] flex-col px-2 gap-4">
      {footer.data.social.map(({ label, link }) => {
        return (
          <li
            key={label}
            className="flex justify-start items-center h-[25%] text-white font-secondary text-sm text-400 m-0"
          >
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
