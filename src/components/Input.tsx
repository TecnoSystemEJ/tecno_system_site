import React from "react";

interface Props {
  type: "text" | "email" | "phone";
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, value, onChange, name }: Props) => {
  return (
    <input
      type={type}
      className="border border-primary-main px-4 py-2 h-14 rounded-xl drop-shadow-sm w-full"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
