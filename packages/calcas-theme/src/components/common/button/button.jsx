import React from 'react';
import { StyledButton } from './button.styles';
import { buttonPropTypes, buttonDefaultProps } from './button.propTypes';

/**
 * Button component that wraps around StyledButton.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to render inside the button.
 * @param {'contained' | 'outlined' | 'text'} props.variant - The variant of the button.
 * @param {'small' | 'medium' | 'large'} props.size - The size of the button.
 * @param {string} props.color - The color of the button. Can be a valid CSS color string or 'primary'/'secondary'.
 * @param {string} props.hoverColor - The hover color of the button. Overrides default hover behavior.
 * @param {React.ReactNode} props.startIcon - Icon to display at the start of the button.
 * @param {React.ReactNode} props.endIcon - Icon to display at the end of the button.
 * @param {function} props.onClick - Handler function to be called when the button is clicked.
 * @param {function} props.onFocus - Handler function to be called when the button is focused.
 * @param {function} props.onMouseOver - Handler function to be called when the mouse hovers over the button.
 * @param {string} props.href - The URL to link to when the button is clicked.
 * @returns {JSX.Element} Rendered Button component.
 */
export default function Button({
  children,
  variant,
  size,
  color,
  hovercolor,
  startIcon,
  endIcon,
  onClick,
  onFocus,
  onMouseOver,
  href,
}) {
  const buttonColor = color && color.startsWith('#') ? undefined : color;
  return (
    <StyledButton
      href={href}
      variant={variant}
      size={size}
      color={buttonColor}
      buttoncolor={color}
      hovercolor={hovercolor}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      onFocus={onFocus}
      onMouseOver={onMouseOver}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = { ...buttonPropTypes };

Button.defaultProps = { ...buttonDefaultProps };
