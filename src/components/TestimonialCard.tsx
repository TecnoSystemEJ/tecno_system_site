import React from "react";
import Image from "next/image";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

interface Props {
  name: string;
  score: number;
  key: number;
}

const TestimonialCard = ({ name, score }: Props) => {
  const maxScore = 5;
  const scoreInt = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;
  const renderStars = [];

  for (let i = 1; i <= maxScore; i++) {
    if (i <= scoreInt) {
      renderStars.push(<IoMdStar key={i} className=" text-primary-main" />);
    } else if (i == scoreInt + 1 && hasHalfStar) {
      renderStars.push(<IoMdStarHalf key={i} className=" text-primary-main" />);
    } else {
      renderStars.push(
        <IoMdStarOutline key={i} className=" text-primary-main" />,
      );
    }
  }

  return (
    <div className="border border-primary-main w-full h-36 rounded-xl">
      <div className="flex gap-2 items-center ml-2 mt-4 w-80">
        <div className="flex flex-col items-center justify-center">
          <div className="border border-primary-main rounded-full w-20 h-20">
            <Image src="/Elipse.svg" width={80} height={80} alt="Icon" />
          </div>
          <div className="flex items-start gap-1 h-6 mt-1">{renderStars}</div>
        </div>

        <div>
          <h3 className="text-sm text-primary-main uppercase font-primary font-normal">
            {name}
          </h3>
          <p className="text-xs font-secondary font-medium uppercase">
            Com base em São Paulo, e escritórios na Espanha e Portugal, temos
            uma atuação internacional. Nossa paixão{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
