import React from "react";
import Image from "next/image";


const NavBar = () => {
  return (
    <div className="flex justify-between bg-gray-50 px-4 py-2 font-medium mb-8 rounded-md shadow-lg">
      <div className="flex items-center">
        <Image
          src={"/homeicons/logo.svg"}
          alt="Logo"
          height={30}
          width={30}
        />
      </div>
      

      <div className="flex items-center">
        <Image
          src={"/homeicons/burguer.svg"}
          alt="Burger"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
};

export default NavBar;
