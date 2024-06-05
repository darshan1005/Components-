import React from "react";
interface CustomButtonProps {
    label: string;
    onClick: () => void;
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
