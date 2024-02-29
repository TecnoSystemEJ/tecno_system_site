import React from "react";
import Image from "next/image";
import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";

const Footer = async () => {
  return (
    <footer className="flex w-full py-8 bg-primary-main ">
      <div className="md:mx-auto w-full h-full md:container sm:flex flex-col p-4">
        <div className="flex">
          <FooterIcons />
          <FooterLinks />
          <div className="hidden md:flex items-end">
            <div className="flex py-2 px-3 h-min rounded-2xl bg-gray-alt">
              <Image
                src="/images/logots01.svg"
                alt="ts logo"
                height={90}
                width={90}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
