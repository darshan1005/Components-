import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import CustomButton from './CustomButton';
var CustomNavMenu = function (_a) {
    var menuItems = _a.menuItems;
    var _b = useState(false), isDrawerOpen = _b[0], setDrawerOpen = _b[1];
    var theme = useTheme();
    var toggleDrawer = function (open) { return function (event) {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    }; };
    return (_jsxs("div", { style: { padding: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }, children: [_jsx(IconButton, { edge: "start", color: "inherit", "aria-label": "menu", onClick: toggleDrawer(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "left", open: isDrawerOpen, onClose: toggleDrawer(false), children: _jsx(List, { children: menuItems.map(function (item, index) { return (_jsxs(ListItem, { button: true, onClick: item.onClick, children: [_jsx(ListItemIcon, { sx: { color: theme.palette.primary.main, fontWeight: 500 }, children: item.icon }), _jsx(ListItemText, { primary: item.text, sx: { color: theme.palette.text.primary } })] }, index)); }) }) }), _jsx(CustomButton, { label: 'signUp/SignIn', onClick: function () {
                    throw new Error('Function not implemented.');
                } })] }));
};
export default CustomNavMenu;
