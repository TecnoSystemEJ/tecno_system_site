import React from "react";
import SliderCard from "./SliderCard";

type Card = {
  image: string;
  title: string;
  text: string;
};

interface Props {
  cards: Card[];
}

const SliderComponent = ({ cards }: Props) => {
  return (
    <div className="mx-4 mt-20 flex flex-row gap-4 bg-gray-alt h-96 w-full overflow-x-auto scroll no-scrollbar">
      {cards.map((card, index) => {
        return (
          <div key={index}>
            <SliderCard
              image={card.image}
              title={card.title}
              text={card.text}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SliderComponent;
