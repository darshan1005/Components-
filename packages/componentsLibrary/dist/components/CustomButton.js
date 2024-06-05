import { jsx as _jsx } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
var CustomButton = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    var theme = useTheme();
    return (_jsx(Button, { variant: "contained", color: "primary", onClick: onClick, style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary
        }, children: label }));
};
export default CustomButton;
