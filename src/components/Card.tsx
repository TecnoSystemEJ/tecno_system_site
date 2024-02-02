"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    image: "",
    title: "Medlembre",
    text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
  },
  {
    image: "",
    title: "Medlembre",
    text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
  },
  {
    image: "",
    title: "Medlembre",
    text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
  },
];

const settings = {
  centerMode: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Card = () => {
  return (
    <div className="py-4 m-0 h-92 flex flex-col justify-center bg-gray-alt">
      <Slider {...settings}>
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="max-w-80 w-80 h-80 mx-4 p-4 mb-20 bg-gray-alt rounded-2xl shadow-xl"
            >
              <div className="h-28 mb-2 bg-white rounded-xl overflow-hidden">
                {
                  <Image
                    src={`/images/${card.image}`}
                    alt="image"
                    height={300}
                    width={300}
                  />
                }
              </div>
              <h3 className="text-black text-bold font-primary text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-black font-secondary text-sm ">{card.text}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Card;
