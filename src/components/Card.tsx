"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Card = () => {
  return (
    <div className="m-0 h-72 flex flex-col justify-center bg-gray-alt">
      <Slider {...settings}>
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="w-56 h-56 mx-4 p-6 my-20 bg-gray-alt rounded-2xl shadow-xl"
            >
              <div className="rounded-2xl">
                {/*<Image src={} alt="image" height={16} width={44} />*/}
              </div>
              <h3 className="text-black text-bold font-primary">
                {card.title}
              </h3>
              <p className="text-black font-secondary">{card.text}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Card;
