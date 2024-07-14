import React from 'react';
import { StyledDivider } from './Divider.styles';
import { DividerWithBackgroundDefaultProps, DividerWithBackgroundPropTypes } from './Divider.propTypes.js';

/**
 * Divider component with optional background image, color, height, and width.
 *
 * @component
 * @example
 * const backgroundImage = 'https://via.placeholder.com/300';
 * const backgroundColor = '#f0f0f0';
 * const height = '2px';
 * const width = '80%';
 * return (
 *   <Divider backgroundImage={backgroundImage} backgroundColor={backgroundColor} height={height} width={width} />
 * );
 *
 * @param {Object} props - Component props.
 * @param {string} [props.backgroundImage] - URL of the background image.
 * @param {string} [props.backgroundColor] - Background color.
 * @param {string} [props.height] - Height of the divider.
 * @param {string} [props.width] - Width of the divider.
 * @returns {React.ReactElement} The rendered component.
 */
function Divider({ backgroundImage, backgroundColor, height, width }) {
  return (
    <StyledDivider
      backgroundimage={backgroundImage}
      backgroundcolor={backgroundColor}
      height={height}
      width={width}
    />
  );
}

Divider.propTypes = DividerWithBackgroundPropTypes;
Divider.defaultProps = DividerWithBackgroundDefaultProps;

export default Divider;
