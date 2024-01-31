import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  styles: "primary" | "secondary";
  href: string;
};

const Button = ({ href, styles, name }: Props) => {
  const buttonClass =
    styles === "primary" ? "primary-button" : "secondary-button";

  return (
    <Link
      href={href}
      className={`flex py-2 text-xl px-4 text-center font-secondary
      rounded-lg items-center ${buttonClass}`}
    >
      {name}
    </Link>
  );
};

export default Button;
