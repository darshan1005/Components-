import React from 'react';
interface CustomModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    content: string;
}
declare const CustomModal: React.FC<CustomModalProps>;
export default CustomModal;
