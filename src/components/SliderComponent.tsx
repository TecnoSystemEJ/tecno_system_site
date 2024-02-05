"use client";
import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Card {
  image: string;
  title: string;
  text: string;
}

type Props = {
  cards: Card[];
};

const SliderComponent = ({ cards }: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" gap-4 py-4 m-4 mt-14 h-92 flex flex-col justify-center bg-gray-alt">
      <Slider {...settings}>
        {cards.map((card, index) => {
          return (
            <SliderCard
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
