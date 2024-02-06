import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const TextCard = ({ title, subtitle }: Props) => {
  return (
    <div className="px-4 flex mt-12 h-16">
      <div className="flex items-right justify-center h-16 flex-grow flex-col text-black font-secondary text-sm pl-2 border-l-2 border-primary-main border-solid">
        <h3 className="text-base font-bold ">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default TextCard;
