import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  styles: "primary" | "secondary";
  href: string;
  textcenter: "center";
  size: "xl" | "sm";
};

const Button = ({ href, styles, name, textcenter, size }: Props) => {
  const buttonClass =
    styles === "primary" ? "primary-button" : "secondary-button";

  const textCenter = textcenter === "center" ? "justify-center" : "";
 
  const fontsize = size === "sm" ? "text-sm" : "text-xl"

  return (
    <Link
      href={href}
      className={`flex py-2 px-4 text-center font-secondary
      rounded-lg items-center font-normal h-12  ${buttonClass} ${textCenter} ${fontsize} `}
    >
      {name}
    </Link>
  );
};

export default Button;
