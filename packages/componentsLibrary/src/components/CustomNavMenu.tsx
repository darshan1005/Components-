import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import CustomButton from './CustomButton';

interface CustomNavMenuProps {
  menuItems: { 
    text: string; 
    icon: React.ReactNode; 
    onClick: () => void }[];
}

const CustomNavMenu: React.FC<CustomNavMenuProps> = ({ menuItems }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div style={{padding: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemIcon sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: theme.palette.text.primary }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <CustomButton label={'signUp/SignIn'} onClick={function (): void {
        throw new Error('Function not implemented.');
      } }></CustomButton>
    </div>
  );
};

export default CustomNavMenu;
