import React from "react";

export interface TextInputProps{
  placeholder?: string
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder }) =>{
  return <input type="text" placeholder={placeholder}/>
};