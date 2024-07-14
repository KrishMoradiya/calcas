import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

/**
 * StyledDivider is a custom styled MUI Divider component that supports background image,
 * background color, height, and width as props.
 *
 * @param {Object} props - The props for the StyledDivider component.
 * @param {string} [props.backgroundImage] - The URL of the background image.
 * @param {string} [props.backgroundColor] - The background color.
 * @param {string|number} [props.height] - The height of the divider.
 * @param {string|number} [props.width] - The width of the divider.
 * @returns {JSX.Element} The styled Divider component.
 */
export const StyledDivider = styled(Divider)(
  ({ backgroundimage, backgroundcolor, height, width }) => ({
    // Remove the default border of the Divider
    border: "none",

    // Apply the background image if provided
    backgroundImage: `url(${backgroundimage})`,

    // Set the background color if provided
    backgroundColor: backgroundcolor,

    // Set the height of the divider if provided
    height: height,

    // Set the width of the divider if provided
    width: width,

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
);
