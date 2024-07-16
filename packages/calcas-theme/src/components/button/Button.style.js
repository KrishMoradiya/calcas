import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

export const StyledTypography = styled(Typography)(
  ({title,fontColor,fontFamily,fontWeight,fontStyle,fontSize,lineHeight}) => ({
    title: title,
    fontColor: fontColor,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    fontSize: fontSize,
    lineHeight: lineHeight
  }),
);

export const StyledButton = styled(Button)(
    ({color,variant,isMenuButton,isMenuListOpen,onClick,paddingX,paddingY,})=>({
        color: color,
        variant: variant,
        isMenuButton: isMenuButton,
        isMenuListOpen: isMenuListOpen,
        onClick: ()=>{
            console.log("Button clicked");
        },
        paddingX: paddingX,
        paddingY: paddingY
    }),
);
