import React from 'react';
import { Box } from '@mui/material';
import { StyledHeader, StyledParagraph } from './typographyblock.styles';
import {
  typographyBlockPropTypes,
  typographyBlockDefaultProps,
} from './typographyblock.propTypes';

/**
 * Component to render a block with header and paragraph Typography components.
 *
 * @component
 * @param {object} props - Component props
 * @param {string} [props.headerVariant] - Variant for the header Typography component.
 * @param {string} [props.paragraphVariant] - Variant for the paragraph Typography component.
 * @param {React.ReactNode} [props.headerChildren] - Children for the header Typography component.
 * @param {React.ReactNode} [props.paragraphChildren] - Children for the paragraph Typography component.
 * @param {string} [props.fontFamily] - Font family for both header and paragraph Typography components.
 * @param {string} [props.headerColor] - Color for header text. Should be one of: 'primary', 'secondary' or a valid CSS color string (e.g., '#FF0000').
 * @param {string} [props.paragraphColor] - Color for paragraph text. Should be one of: 'primary', 'secondary' or a valid CSS color string (e.g., '#FF0000').
 * @returns {JSX.Element} - Rendered component
 */
export default function TypographyBlock({
  headerVariant,
  paragraphVariant,
  headerChildren,
  paragraphChildren,
  headerFontFamily,
  paragraphFontFamily,
  headerColor,
  paragraphColor,
}) {
  return (
    <Box>
      {headerChildren && (
        <StyledHeader
          variant={headerVariant}
          fontFamily={headerFontFamily}
          color={headerColor}
        >
          {headerChildren}
        </StyledHeader>
      )}
      {paragraphChildren && (
        <StyledParagraph
          variant={paragraphVariant}
          fontFamily={paragraphFontFamily}
          color={paragraphColor}
        >
          {paragraphChildren}
        </StyledParagraph>
      )}
    </Box>
  );
}

TypographyBlock.propTypes = {
  ...typographyBlockPropTypes,
};

TypographyBlock.defaultProps = {
  ...typographyBlockDefaultProps,
};
