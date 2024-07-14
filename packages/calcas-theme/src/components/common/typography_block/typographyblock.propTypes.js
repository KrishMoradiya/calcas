import PropTypes from 'prop-types';

export const typographyBlockPropTypes = {
  /**
   * Variant for the header Typography component.
   * Should be one of: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'.
   */
  headerVariant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Variant for the paragraph Typography component.
   * Should be one of: 'body1', 'body2', 'subtitle1', 'subtitle2', 'caption', 'button', 'overline'.
   */
  paragraphVariant: PropTypes.oneOf([
    'body1',
    'body2',
    'subtitle1',
    'subtitle2',
    'caption',
  ]),
  /**
   * Children for the header Typography component.
   * If provided, this content will be rendered inside the header Typography component.
   */
  headerChildren: PropTypes.node,
  /**
   * Children for the paragraph Typography component.
   * If provided, this content will be rendered inside the paragraph Typography component.
   */
  paragraphChildren: PropTypes.node,
  /**
   * Font family for the header Typography component.
   * Should be one of: 'Raleway', 'Roboto'.
   */
  headerFontFamily: PropTypes.oneOf(['Raleway', 'Roboto']),

  /**
   * Font family for the paragraph Typography component.
   * Should be one of: 'Raleway', 'Roboto'.
   */
  paragraphFontFamily: PropTypes.oneOf(['Raleway', 'Roboto']),
  /**
   * Color for header text.
   * Should be one of: 'text.primary(white)', 'text.secondary(black)', 'primary(Dark Blue)', 'secondary(Teal)' or a valid CSS color string (e.g., '#FF0000').
   * If provided, this color will override the default text color.
   */
  headerColor: PropTypes.oneOfType([
    PropTypes.oneOf(['text.primary', 'text.secondary', 'primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * Color for paragraph text.
   * Should be one of: 'text.primary(white)', 'text.secondary(black)', 'primary(Dark Blue)', 'secondary(Teal)' or a valid CSS color string (e.g., '#FF0000').
   * If provided, this color will override the default text color.
   */
  paragraphColor: PropTypes.oneOfType([
    PropTypes.oneOf(['text.primary', 'text.secondary', 'primary', 'secondary']),
    PropTypes.string,
  ]),
};

export const typographyBlockDefaultProps = {
  headerVariant: 'h1',
  paragraphVariant: 'body1',
  headerFontFamily: 'Raleway',
  paragraphFontFamily: 'Roboto',
  color: 'text.secondary',
};
