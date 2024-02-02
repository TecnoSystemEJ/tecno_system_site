import React from "react";
import Image from "next/image";

const cards = [
  {
    image: "",
    title: "back to what I was saying",
    text: "eu tô de buenas, pegando as muchachas, tequila e limão",
  },
  {
    image: "",
    title: "this could be us",
    text: "eu tô de buenas, brilhando bastante",
  },
  {
    image: "",
    title: "but you playin'",
    text: "mais que diamante, e curtindo esse som",
  },
];

const Card = () => {
  return (
    <div className="m-0 flex overflow-x-hidden justify-evenly bg-red-600">
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className="min-w-56 min-h-56 mx-4 grow-1 p-6 my-20 h-full sm:w-full bg-gray-alt rounded-2xl shadow-xl"
          >
            <div className="rounded-2xl">
              {/*<Image src={} alt="image" height={16} width={44} />*/}
            </div>
            <h3 className="text-black text-bold font-primary">{card.title}</h3>
            <p className="text-black font-secondary">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
