import React from "react";

const Input = ({ type, placeholder, value, onChange, lable }) => {
  return (
    <>
      {lable ? <lable>{lable}</lable> : null}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="w-full px-2 py-1 my-2 border-2 border-sky-200 rounded-xl focus:outline-0 shadow-md"
      />
    </>
  );
};

export default Input;
