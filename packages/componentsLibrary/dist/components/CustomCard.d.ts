import React from 'react';
interface CustomCardProps {
    title: string;
    content: string;
    imgURL: string;
    alt: string;
}
declare const CustomCard: React.FC<CustomCardProps>;
export default CustomCard;
