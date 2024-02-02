import React from "react";

type TextCardProps = {
  title: string;
  subtitle: string;
};

const TextCard = ({ title, subtitle }: TextCardProps) => {
  return (
    <div className="flex items-center mt-12 h-16">
      <div className="bg-primary-main h-full w-1 mr-3"></div>
      <div className="flex-grow text-black font-secondary text-sm">
        <h3 className=" font-bold ">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default TextCard;
