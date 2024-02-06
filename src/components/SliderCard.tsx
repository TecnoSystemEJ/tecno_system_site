import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  text: string;
}

const SliderCard = ({ image, title, text }: Props) => {
  return (
    <div className="bg-gray-alt flex flex-col items-start justify-center rounded-2xl shadow-md p-4">
      <div className="w-72 h-40 rounded-2xl overflow-hidden">
        <Image src={`/images/${image}`} alt="any" height={300} width={300} />
      </div>
      <h2 className="text-xl normal-case font-primary">{title}</h2>
      <p className="text-base lowercase font-400 font-secondary mb-2">{text}</p>
    </div>
  );
};

export default SliderCard;
