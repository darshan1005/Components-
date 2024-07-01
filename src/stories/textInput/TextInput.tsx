import React from "react";
import { CiSearch } from "react-icons/ci";
import './TextInput.css'

export interface TextInputProps{
  placeholder?: string
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder }) =>{
  return (
    <div className="input">
      <div className="search"><CiSearch /></div> 
      <input type="text" placeholder={placeholder}/>
    </div>
  
)
};