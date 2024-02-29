import React from "react";
import { SocialIcon } from "react-social-icons";

const FooterIcons = () => {
  const socialIcons = [
    "https://email.com",
    "https://whatsapp.com",
    "https://instagram.com",
    "https://facebook.com",
  ];
  return (
    <ul className="flex flex-col">
      {socialIcons.map((link, index) => {
        return (
          <li key={index} className="h-[25%]">
            <SocialIcon
              url={link}
              bgColor={link === "https://facebook.com" ? "white" : "none"}
              fgColor={link === "https://facebook.com" ? "none" : "white"}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FooterIcons;
