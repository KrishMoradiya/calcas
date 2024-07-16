import { styled } from "@mui/material/styles";
import {Box} from "@mui/material/Box";
import { Menu } from "@mui/material";
import { BorderBottom, Height, HeightRounded, Padding, WidthFull, WidthFullRounded, WidthNormalRounded } from "@mui/icons-material";

export const StyledMenu = styled(Menu)(
  ({}) => ({
    marginTop: '15px',
    width: '100%',
    '& .MuiPopover-paper':
        { maxHeight:'fit-content',maxWidth:'fit-content',borderRadius:'16px'},
    '& .MuiMenu-list':
        {paddingTop:'0px',paddingBottom:'0px',borderRadius:4,}
  }),
);