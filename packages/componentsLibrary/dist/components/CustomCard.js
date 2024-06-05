import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
var CustomCard = function (_a) {
    var title = _a.title, content = _a.content, imgURL = _a.imgURL, alt = _a.alt;
    var theme = useTheme();
    return (_jsxs(Card, { sx: { maxWidth: 345, bgcolor: theme.palette.background.paper }, children: [_jsx(CardMedia, { component: "img", height: 140, image: imgURL, alt: alt }), _jsxs(CardContent, { children: [_jsx(Typography, { variant: 'h5', component: 'div', color: theme.palette.text.primary, children: title }), _jsx(Typography, { variant: 'body2', color: theme.palette.text.primary, children: content })] })] }));
};
export default CustomCard;
