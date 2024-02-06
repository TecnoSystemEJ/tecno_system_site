import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const TextCard = ({ title, subtitle }: Props) => {
  return (
    <div className="uppercase flex mt-12 h-16">
      <div className="flex items-right text-base justify-center h-16 flex-grow flex-col text-black font-secondary pl-2 border-l-[3px] border-primary-main border-solid">
        <h3 className="font-bold">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default TextCard;
