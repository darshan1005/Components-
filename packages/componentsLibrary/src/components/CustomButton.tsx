import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import React from "react";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  const theme = useTheme();
  
  return (
    <Button
    variant="contained"
    color="primary"
    onClick={onClick}
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;