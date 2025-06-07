import React from 'react'

const Button = ({btnText, onClick, variant, size, btnPosition}) => {

  const VARIANT_CLASSES = {
    primary: "bg-sky-700 text-white font-medium hover:bg-sky-900",
    secondary: "bg-red-400 text-white font-medium hover:bg-red-500"
  }

  const SIZE_CLASSES = {
    sm: "text-sm px-2 py-1 rounded-sm my-1",
    md: "text-md px-5 py-1 rounded-sm my-2",
    lg: "text-lg px-6 py-2 rounded-sm my-2",
  }

  const BUTTON_POSITION ={
    center: "block mx-auto",
    right: "absolute bottom-2 right-4"
  }
  return (
    <>
    <button className={`cursor-pointer ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${BUTTON_POSITION[btnPosition]} `} onClick={onClick}>{btnText}</button>
    </>
  )
}

export default Button