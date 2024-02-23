// React
import React from "react";
// Icons
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// Prismic
import { ImageField, NumberField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


interface Props {
  text: RichTextField;
  score: NumberField | null;
  title: RichTextField;
  image: ImageField;
  key: number;
}

const TestimonialCard = ({ text, score, title, image }: Props) => {
  const maxScore = 5;
  const scoreInt = score ?  Math.floor(score) : 0;
  const hasHalfStar = score ? score % 1 !== 0 : false;
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
    <div className="flex flex-col justify-center border border-primary-main w-[348px] h-[153px] rounded-xl shadow-xl">
      <div className="flex gap-2 m-auto border w-80">
        <div className="flex flex-col items-center justify-center">
          <div className="border border-primary-main rounded-full w-20 h-20">
            <PrismicNextImage field={image}/>
          </div>
          <div className="flex items-start gap-1 h-6 mt-1">{renderStars}</div>
        </div>

        <div className="flex flex-col gap-1">
         <PrismicRichText
          field={title}
          components={{
            heading3: ({children}) => <h3 className="text-sm text-primary-main uppercase font-primary font-normal">{children}</h3>
          }}
         />
          <PrismicRichText
          field={text}
          components={{
            paragraph: ({children}) => <p className="text-xs font-secondary font-medium uppercase">{children}</p>
          }}
         />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
