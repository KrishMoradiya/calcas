import PropTypes from 'prop-types';

export const buttonPropTypes = {
  /**
   * Children for the button component.
   * If provided, this content will be rendered inside the Button component.
   */
  children: PropTypes.node,
  /**
   * The URL to link to when the button is clicked.
   */
  href: PropTypes.string,
  /**
   * Variant for the button component.
   * Should be one of: 'contained', 'outlined', 'text'.
   */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /**
   * Size for the button component.
   * Should be one of: 'small', 'medium', 'large'.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Color for button component.
   * Should be one of: 'primary(dark blue)', 'secondary(Teal)', or a valid CSS color string (e.g., '#FF0000').
   * If provided, this color will override the default color.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * Hover Color for button component.
   * Should be a valid CSS color string (e.g., '#FF0000').
   * If provided, this color will override the default color.
   */
  hovercolor: PropTypes.string,
  /**
   * Start icon for button component.
   * Should be a valid React node.
   * If provided, this icon will be rendered at the start of the Button component.
   */
  startIcon: PropTypes.node,
  /**
   * End icon for button component.
   * Should be a valid React node.
   * If provided, this icon will be rendered at the end of the Button component.
   */
  endIcon: PropTypes.node,
  /**
   * OnClick event handler for button component.
   * Should be a function.
   */
  onClick: PropTypes.func,
  /**
   * OnFocus event handler for button component.
   * Should be a function.
   */
  onFocus: PropTypes.func,
  /**
   * OnMouseOver event handler for button component.
   * Should be a function.
   */
  onMouseOver: PropTypes.func,
};

export const buttonDefaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
};
