import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  styles: "primary" | "secondary";
  href: string;
  buttonSecundary?: boolean;
};

const Button = ({ href, styles, name, buttonSecundary }: Props) => {
  const buttonClass =
    styles === "primary" ? "primary-button" : "secondary-button";

  return (
    <Link
      href={href}
      className={`flex px-4 normal-case font-secondary
      rounded-lg items-center ${buttonClass}
      ${buttonSecundary ? "justify-center py-3 text-sm font-normal" : "py-1 text-xl"}`}
    >
      {name}
    </Link>
  );
};

export default Button;
