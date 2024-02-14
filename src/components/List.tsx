import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface Props {
  text: string;
}

const List = ({ text }: Props) => {
  return (
    <li className="flex flex-row gap-2 items-center ">
      <IoIosCheckmarkCircle className="text-primary-main text-[15px]" />
      <h3 className="uppercase font-secondary text-sm font-normal">{text}</h3>
    </li>
  );
};

export default List;
