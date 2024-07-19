import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import darkenHexColor from '../../../utils/colorUtils';

export const StyledButton = styled(Button)(
  ({ variant, buttoncolor, hovercolor }) => ({
    ...(buttoncolor && buttoncolor.startsWith('#') && variant === 'contained'
      ? {
          backgroundColor: buttoncolor,
          '&:hover': {
            backgroundColor: hovercolor || darkenHexColor(buttoncolor),
          },
        }
      : {}),
    ...(buttoncolor &&
    buttoncolor.startsWith('#') &&
    (variant === 'outlined' || variant === 'text')
      ? {
          borderColor: buttoncolor,
          color: buttoncolor,
          '&:hover': {
            borderColor: hovercolor || darkenHexColor(buttoncolor),
            color: hovercolor || darkenHexColor(buttoncolor),
          },
        }
      : {}),
  }),
);
