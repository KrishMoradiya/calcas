import React, {useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {FormControl, Menu, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TypographyBlock from "../common/typography_block/typographyblock";
import {CustomButton} from "../button/CustomButton";
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import {
    NavbarPropTypes,
    NavbarDefaultProps, 
    NavbarSelectButtonPropTypes, 
    NavbarSelectButtonDefaultProps,
    CustomMenuPropTypes, 
    CustomMenuDefaultProps,
    CustomMenuItemPropTypes, 
    CustomMenuItemDefaultProps,
    MenuButtonPropTypes,
    MenuButtonDefaultProps
} from './Navbar.propTypes';
import { StyledMenu } from "./Navbar.styles";
export const Navbar = (props) => {

    const {
        items
    } = props;

    const [navItems,setNavItems] = useState(items);
    const [navItem, setNavItem] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event,navItem) => {
        setAnchorEl(event.currentTarget);
        setNavItem(navItem);
        console.log(event.currentTarget + " and NavItem is: ",navItem);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static" color="text">
                <Toolbar>
                    <CalcasLogo />
                    <CustomButton
                        paddingX={3}
                        title="Get a quote"
                    />
                    <NavbarSelectButton navItems={navItems} handleMenuClick={handleMenuClick} />
                </Toolbar>
                <CustomMenu anchorEl={anchorEl} handleClose={handleClose} navItem={navItem} />
            </AppBar>
        </>
    );
};

export const NavbarSelectButton = (props) => {
    const {
        navItems,
        handleMenuClick,
    } = props;

    return (
        <>
                {
                    navItems.length > 0 && navItems.map((navItem, index) => {
                        return (
                            (navItem.children === undefined)
                                ? <MenuButton buttonLabel={navItem.label} key={index}/>
                                :   <>
                                        <MenuButton buttonLabel={navItem.label} onClick={(e)=>{handleMenuClick(e,navItem)}} key={index}/>
                                    </>
                        )
                    })
                }
        </>
    )
}

export const CalcasLogo = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <img src='https://www.calcas.com/o/CCMC-theme/images/calcas-logo.svg' />
            </Box>
        </>
    )
}

export const CustomMenuItem = (props) =>{
    const {
        itemLabel,
        handleClose
    } = props;

    return (
        <>
            <MenuItem key={itemLabel} onClick={handleClose} color='secondary' sx={{color:'secondary'}}>
                <Typography color='secondary'>{itemLabel}</Typography>
            </MenuItem>
        </>
    )
}

export const MenuButton = (props) =>{
     const {
         buttonLabel,
         onClick = (onClick === undefined) ? ()=>{} : onClick,
     } = props;

     return (
         <>
             <Button color="secondary" onClick={onClick}>
                 <Typography color='info'>
                     {buttonLabel}
                 </Typography>
             </Button>
         </>
     )
}

export const CustomMenu = (props) => {
    const {
        anchorEl,
        handleClose,
        navItem
    } = props;

    return (
        <>
            <StyledMenu anchorEl={anchorEl} handleClose={handleClose} navItem={navItem}
                  open={Boolean(anchorEl)}
                  openClose={handleClose}
                  disableScrollLock={true}
                  MenuListProps={{ onMouseLeave: handleClose }}
                    >
                        <Box sx={{
                            borderRadius: 4,
                            backgroundColor: '#EBEEF2',
                            padding:2
                        }}>
                            <Grid container spacing={3}>
                                {
                                    navItem && navItem.children && navItem.children.map((menuSection, index) => {
                                        const length = parseInt(navItem.children.length + navItem.children.reverse()[0].otherExtraComponents.length);
                                        return (menuSection.label !== undefined) ? <Grid item xs={12} sm={12/length} key={index} sx={{padding:'25px'}}>
                                            <Typography variant="subtitle1" gutterBottom color='primary'>{menuSection.label}</Typography>
                                            <Divider />
                                            {
                                                menuSection.children && menuSection.children.map((menuSectionItem, index) => {
                                                    return <CustomMenuItem itemLabel={menuSectionItem.label} handleClose={handleClose} key={index} />
                                                })
                                            }
                                        </Grid> : <>{
                                            menuSection.otherExtraComponents.map((otherComponent,index)=>{
                                                return <Grid item xs={12} sm={4} key={index} sx={{padding:'25px'}}>
                                                    {otherComponent.Component}
                                                </Grid>
                                            })
                                        }</>
                                    })
                                }
                            </Grid>
                        </Box>
            </StyledMenu>
        </>
    )
}

export const ClaimExtraComponent = ()=>{
    return (
        <>
            <Box>
                <CustomButton
                    color="secondary"
                    paddingX={3}
                />
            </Box>
            <Box>
                <TypographyBlock
                    paragraphChildren="Non-Customer claims"
                    paragraphColor="#00305E"
                    paragraphFontFamily="Raleway"
                    paragraphVariant="subtitle2"
                    />
            </Box>
        </>
    );
}


Navbar.propTypes = {
    ...NavbarPropTypes
};
Navbar.defaultProps = {
    ...NavbarDefaultProps
}

NavbarSelectButton.propTypes = {
    ...NavbarSelectButtonPropTypes
};
NavbarSelectButton.defaultProps = {
    ...NavbarSelectButtonDefaultProps
}

CustomMenuItem.propTypes = {
    ...CustomMenuItemPropTypes
};
CustomMenuItem.defaultProps = {
    ...CustomMenuItemDefaultProps
}

MenuButton.propTypes = {
    ...MenuButtonPropTypes
};
MenuButton.defaultProps = {
    ...MenuButtonDefaultProps
}

CustomMenu.propTypes = {
    ...CustomMenuPropTypes
};
CustomMenu.defaultProps = {
    ...CustomMenuDefaultProps
}
