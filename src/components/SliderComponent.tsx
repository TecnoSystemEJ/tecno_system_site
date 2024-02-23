import React from "react";
import SliderCard from "./SliderCard";
import { ImageField, RichTextField } from "@prismicio/client";

type Card = {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
};

interface Props {
  cards: Card[];
}

const SliderComponent = ({ cards }: Props) => {
  return (
    <div className="my-10 flex flex-row gap-4 bg-gray-alt w-full overflow-x-auto scroll no-scrollbar">
      {cards.map((card, index) => {
        return (
          <div key={index}>
            <SliderCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SliderComponent;
