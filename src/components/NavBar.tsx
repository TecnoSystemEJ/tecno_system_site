"use client";
import React, { useState } from "react";
import Image from "next/image";
import StaticLsit from "./StaticList";

const NavBar = () => {
  {
    const [nav, setNav] = useState(false);

    const handleNavClick = () => {
      setNav(!nav);
    };
    return (
      <nav className="flex flex-col rounded-b-3xl shadow-lg border border-gray-200 bg-gray-alt md:border-none md:shadow-none md:container md:mx-auto md:py-10">
        <div className="w-full flex justify-between items-center px-5 py-2 ">
          <div className="md:w-40 w-10 relative md:pt-32 pt-10">
            <Image
              src="/images/logots01.svg"
              alt="ts logo"
              objectFit="contain"
              fill
              className="w-full h-full top-0 left-0 "
            />
          </div>
          <button className="md:hidden" onClick={handleNavClick}>
            <Image
              src="/images/Vector.svg"
              alt="nem sei"
              height={45}
              width={45}
            />
          </button>
          <StaticLsit
            ulStyles="hidden md:flex justify-between gap-6 lg:text-[20px] md:text-sm font-secondary font-[600] uppercase"
            liStyles="flex justify-center items-center px-4 rounded-2xl hover:border-red-600 border border-transparent"
          />
        </div>
        <div>
          {nav ? (
            <StaticLsit
              ulStyles="md:hidden w-full flex flex-col justify-center items-center gap-6 my-20 text-[28px] md:text-sm font-primary font-[600] uppercase"
              liStyles="flex justify-center items-center px-4 font-primary text-primary-main hover:text-red-500 "
              handleNavClick={handleNavClick}
            />
          ) : (
            <></>
          )}
        </div>
      </nav>
    );
  }
};

export default NavBar;
