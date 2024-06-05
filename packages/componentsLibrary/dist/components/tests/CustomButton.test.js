import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../CustomButton';
import { ThemeProvider } from '@mui/material/styles';
import themeDark from '../../themes/themeDark';
describe('CustomButton', function () {
    it('renders with correct label and handles click', function () {
        var handleClick = jest.fn();
        render(_jsx(ThemeProvider, { theme: themeDark, children: _jsx(CustomButton, { label: "Click Me", onClick: handleClick }) }));
        var button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
