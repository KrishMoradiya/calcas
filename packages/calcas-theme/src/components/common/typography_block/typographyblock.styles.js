import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledHeader = styled(Typography)(({ fontFamily, color }) => ({
  fontFamily: fontFamily || 'Raleway',
  ...(color && color.startsWith('#') ? { color: color } : {}),
}));

export const StyledParagraph = styled(Typography)(({ fontFamily, color }) => ({
  fontFamily: fontFamily || 'Roboto',
  ...(color && color.startsWith('#') ? { color: color } : {}),
}));
