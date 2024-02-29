import React from "react";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const NavBar = async () => {
  {
    const client = createClient();
    const navbar = await client.getSingle("navbar");
    return (
      <nav className="w-full flex justify-between items-center px-5 py-2 rounded-3xl shadow-lg border border-gray-200 bg-gray-alt md:border-none md:shadow-none md:container md:mx-auto md:py-10">
        <div className="md:w-40 w-10 relative md:pt-32 pt-10">
          <Image
            src="/images/logots01.svg"
            alt="ts logo"
            objectFit="contain"
            fill
            className="w-full h-full top-0 left-0 "
          />
        </div>
        <div className="md:hidden lg:hidden">
          <Image
            src="/images/Vector.svg"
            alt="nem sei"
            height={45}
            width={45}
          />
        </div>
        <ul className="hidden lg:flex md:flex justify-between gap-6 lg:text-[20px] md:text-sm font-secondary font-[600] uppercase">
          {navbar.data.navigation.map(({ label, link }) => {
            return (
              <li
                key={label}
                className="flex justify-center items-center px-4 rounded-2xl hover:border-red-600 border border-transparent"
              >
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
};

export default NavBar;
