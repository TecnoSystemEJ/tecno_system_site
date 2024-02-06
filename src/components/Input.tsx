import React from 'react'

interface Props {
    type: 'text' | 'email' | 'tel';
    placeholder: string; 
    value: string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({type, placeholder, value, onChange}: Props) => {
  return (
    <div className='mt-8'>

      <input
        type={type}
        className="border border-primary-main px-4 py-2 h-14 rounded-xl shadow-lg w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input