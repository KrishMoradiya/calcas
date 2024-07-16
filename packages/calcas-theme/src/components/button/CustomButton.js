import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import customTheme from '../../styles/themes/theme';
import {Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMoreLess from '@mui/icons-material/ExpandLess';
import PropTypes from "prop-types";
import {CustomButtonPropTypes,
CustomButtonDefaultProps} from "./Button.propsTypes";
import { StyledButton, StyledTypography } from "./Button.style";

export const CustomButton = ({title,color,variant,isMenuButton,isMenuListOpen,onClick,fontColor,fontFamily,paddingX,paddingY,fontWeight,fontStyle,fontSize,lineHeight}) => {
    let ariaHasPopup="true";
    let id="demo-positioned-button";

    let ariaControls=((isMenuListOpen !== undefined && isMenuListOpen) ? 'demo-positioned-menu' : undefined);
    let ariaExpanded=((isMenuListOpen !== undefined && isMenuListOpen) ? 'true' : undefined);

    return (
        <>
            <ThemeProvider theme={customTheme}>
                <StyledButton variant={variant} color={color} id={id} aria-controls={ariaControls} aria-haspopup={ariaHasPopup} aria-expanded={ariaExpanded} onClick={onClick} sx={{paddingX:paddingX,paddingY:paddingY}}>
                    <StyledTypography color={fontColor} fontFamily={fontFamily} fontWeight={fontWeight} fontStyle={fontStyle} fontSize={fontSize} lineHeight={lineHeight}>
                        {title}
                    </StyledTypography>
                    {isMenuButton ? ((!isMenuListOpen)?<ExpandMoreIcon color={fontColor} fontSize='small' /> : <ExpandMoreLess color={fontColor} fontSize='small'/>):null}
                </StyledButton>
            </ThemeProvider>
        </>
    )
}

CustomButton.propTypes = {
    ...CustomButtonPropTypes
}
CustomButton.defaultProps = {
    ...CustomButtonDefaultProps
}
