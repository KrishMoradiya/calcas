import { styled } from "@mui/material/styles";
import {Box} from "@mui/material/Box";
import { Menu, Container } from "@mui/material";
import { BorderBottom, Height, HeightRounded, Padding, WidthFull, WidthFullRounded, WidthNormalRounded } from "@mui/icons-material";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";

export const StyledAppbar = styled(AppBar)(({position, color})=>({
    position:position,
    color:color
}))
export const StyledNavButtonContainer = styled(Container)(({})=>({
    width: {xs:'0%',sm:'80%',md:'75%',lg:'70%',xl:'60%'},
    display: {xs:'none',sm:'flex'},
    justifyContent:'space-evenly',
    alignItems:'center'
}))
export const StyledMenu = styled(Menu)(
  ({}) => ({
    marginTop: '15px',
    width: '100%',
    '& .MuiPopover-paper':
        { maxHeight:'max-content',maxWidth:'max-width',borderRadius:'16px'},
    '& .MuiMenu-list':
        {paddingTop:'0px',paddingBottom:'0px',borderRadius:4,},
      pointerEvents:'none'
  }),
);

export const StyledSectionLink = styled(Link)(
    ({color,margin,padding})=>({
        color: color || 'secondary',
        margin: margin || 0,
        padding: padding || 0,
        pointerEvents:'auto'
    })
)