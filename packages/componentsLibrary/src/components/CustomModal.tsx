import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CustomModalProps {
  open: boolean;
  onClose: ()=>  void;
  title: string;
  content: string;
}

const CustomModal: React.FC<CustomModalProps> = ({open, onClose, title, content}) => {
  const theme = useTheme();

  return (
    <Modal 
      open={open} 
      onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" color={theme.palette.text.primary}>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }} color={theme.palette.text.primary}>
          {content}
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2 }} color="primary" variant="contained">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal