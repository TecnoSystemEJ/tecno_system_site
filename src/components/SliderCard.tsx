import React from "react";
import { ImageField, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

interface Props {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
}

const SliderCard = ({ image, title, description }: Props) => {
  return (
    <div className="h-[353px] max-h-[353px] max-w-[324px] gap-4 bg-gray-alt flex flex-col items-center justify-start rounded-2xl shadow-md p-4">
      <div className="w-72 min-h-[156px] max-h-[156px] rounded-2xl overflow-hidden">
        <PrismicNextImage field={image} height={300} width={300} />
      </div>
      <div className="flex flex-col items-start flex-1">
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-xl normal-case font-primary">{children}</h2>
            ),
          }}
        />
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-base lowercase font-400 font-secondary mb-2">
                {children}
              </p>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SliderCard;
