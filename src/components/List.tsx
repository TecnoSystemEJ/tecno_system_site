import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface Props {
  text: string;
}

const List = ({ text }: Props) => {
  return (
    <div className="font-secondary text-xs text-[14px] flex items-center font-normal mb-4">
      <IoIosCheckmarkCircle className="mr-1 text-red-700 text-[15px]" />
      <h3 className="uppercase">{text}</h3>
    </div>
  );
};

export default List;
