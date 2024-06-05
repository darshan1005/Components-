import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../CustomButton';
import { ThemeProvider } from '@mui/material/styles';
import themeDark from '../../themes/themeDark';

describe('Running Test for CustomButton', () => {
  it('renders with correct label and handles click', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={themeDark}>
        <CustomButton label="Click Me" onClick={handleClick} data-test-id="custom-button" />
      </ThemeProvider>
    );
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toEqual(expect.stringMatching(/Click Me/));
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
