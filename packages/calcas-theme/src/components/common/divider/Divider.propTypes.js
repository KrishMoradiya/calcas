import PropTypes from 'prop-types';

/**
 * PropTypes for Divider component with optional background image, color, height, and width.
 *
 * @type {Object}
 */
export const DividerWithBackgroundPropTypes = {
  /** URL of the background image */
  backgroundImage: PropTypes.string,
  /** Background color */
  backgroundColor: PropTypes.string,
  /** Height of the divider */
  height: PropTypes.string,
  /** Width of the divider */
  width: PropTypes.string,
};

/**
 * Default props for Divider component.
 *
 * @type {Object}
 */
export const DividerWithBackgroundDefaultProps = {
  backgroundImage: null,
  backgroundColor: 'transparent',
  height: '1px',
  width: '100%',
};
