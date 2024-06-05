import React from 'react'
import {Card, CardContent, Typography, CardMedia} from '@mui/material'
import {useTheme} from '@mui/material/styles'

interface CustomCardProps {
  title: string;
  content: string;
  imgURL: string;
  alt: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, content, imgURL, alt })=> {
  const theme = useTheme();

  return (
    <Card sx= {{maxWidth: 345, bgcolor: theme.palette.background.paper}}>
      <CardMedia
      component="img"
      height={140}
      image={imgURL}
      alt={alt}
      />
      <CardContent>
        <Typography variant='h5' component='div' color={theme.palette.text.primary}>
          {title}
        </Typography>
        <Typography variant='body2' color={theme.palette.text.primary}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;