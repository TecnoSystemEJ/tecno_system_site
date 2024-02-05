import React from "react";
import Image from "next/image";

type Props = {
  key: number;
  image: string;
  title: string;
  text: string;
};

const SliderCard = ({ key, image, title, text }: Props) => {
  return (
    <div
      key={key}
      className="max-w-80 w-80 h-80 mx-4 p-4 mb-20 bg-gray-alt rounded-2xl shadow-xl"
    >
      <div className="h-28 mb-2 bg-white rounded-xl overflow-hidden">
        {
          <Image
            src={`/images/${image}`}
            alt="image"
            height={300}
            width={300}
          />
        }
      </div>
      <h3 className="text-black text-bold font-primary text-lg mb-2">
        {title}
      </h3>
      <p className="text-black font-secondary text-sm ">{text}</p>
    </div>
  );
};

export default SliderCard;
