import { styled } from "@mui/material/styles";
import {Box} from "@mui/material/Box";
import { Menu } from "@mui/material";
import { Height, HeightRounded, WidthFull, WidthFullRounded, WidthNormalRounded } from "@mui/icons-material";

export const StyledMenu = styled(Menu)(
  ({}) => ({
    marginTop: '15px',
    '& .MuiPopover-paper':
        { maxHeight:'max-content',maxWidth:'max-content',borderRadius:'16px' },
    '& .MuiMenu-list':
        {paddingTop:'0px',paddingBottom:'0px',borderRadius:4}
  }),
);