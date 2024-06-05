import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
var CustomModal = function (_a) {
    var open = _a.open, onClose = _a.onClose, title = _a.title, content = _a.content;
    var theme = useTheme();
    return (_jsx(Modal, { open: open, onClose: onClose, children: _jsxs(Box, { sx: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: theme.palette.background.paper,
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }, children: [_jsx(Typography, { variant: "h6", component: "h2", color: theme.palette.text.primary, children: title }), _jsx(Typography, { sx: { mt: 2 }, color: theme.palette.text.primary, children: content }), _jsx(Button, { onClick: onClose, sx: { mt: 2 }, color: "primary", variant: "contained", children: "Close" })] }) }));
};
export default CustomModal;
