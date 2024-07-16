import React, {useState,createContext, useContext} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {FormControl, Menu, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TypographyBlock from "../common/typography_block/typographyblock";
import {CustomButton} from "../button/CustomButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMoreLess from '@mui/icons-material/ExpandLess';
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


const MyContext = createContext();


export const Navbar = (props) => {

    const {
        items
    } = props;

    const [navItems,setNavItems] = useState(items);
    const [navItem, setNavItem] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event,navItem) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
        alert("NavItem is: "+navItem)
        setNavItem(navItem);
        console.log(event.currentTarget + " and NavItem is: ",navItem);
        console.log("handleMenuHover")
    };

    const handleClose = () => {
        console.log("remover Hover")
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static" color="text">
                    <Toolbar>
                        <CalcasLogo />
                        <Container sx={{width:'70%'}}>
                            <Grid container sx={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item>
                                    <CustomButton
                                        paddingX={3}
                                        title="Get a quote"
                                    />
                                </Grid>
                                <NavbarSelectButton navItems={navItems} handleMenuClick={handleMenuClick} handleClose={handleClose} anchorEl={anchorEl}/>
                            </Grid>
                        </Container>
                        {/* <Container sx={{display:{xs:'none',sm:'flex'}}}>     */}
                        {/* </Container> */}
                            
                    </Toolbar>
                <Container>
                    <CustomMenu anchorEl={anchorEl} handleClose={handleClose} navItem={navItem} />
                </Container>
            </AppBar>
        </>
    );
};

export const NavbarSelectButton = (props) => {
    const {
        navItems,
        handleMenuClick,
        handleClose,
        anchorEl
    } = props;

    return (
        <>
                {
                    navItems.length > 0 && navItems.map((navItem, index) => {
                        return (
                            (navItem.children === undefined)
                                ? <MenuButton buttonLabel={navItem.label} key={index} href={navItem.key}/>
                                : <MenuButton buttonLabel={navItem.label} onMouseEnter={(e)=>{handleMenuClick(e,navItem)}} onMouseLeave={(e)=>{handleClose()}} href={navItem.key} anchorEl={anchorEl} target={(e)=> {return e.currentTarget}}/>
                        )
                    })
                }
        </>
    )
}
export const MenuButton = (props) =>{
    const {
        buttonLabel,
        onMouseEnter = (onMouseEnter === undefined) ? ()=>{} : onMouseEnter,
        href,
    } = props;

    return (
        <Grid item sx={{display:'flex',alignItems:'center'}}>
            <Link href={href} color="secondary" 
                onMouseEnter={onMouseEnter}
            >
                <Typography color='info'>
                    {buttonLabel}
                </Typography>
            </Link>
        </Grid>
    )
}

export const CalcasLogo = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, display: {md: 'flex' } }}>
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
            <Link href="#" key={itemLabel} onClick={handleClose} color='secondary' sx={{color:'secondary',marginX:0,paddingX:0,marginX:0,paddingy:0}}>
                <TypographyBlock
                    paragraphChildren={itemLabel}
                    paragraphColor="text.secondary"
                    paragraphFontFamily="Raleway"
                    paragraphVariant="caption"
                />
            </Link>
        </>
    )
}

export const CustomMenu = (props) => {
    const {
        anchorEl,
        handleClose,
        navItem,
    } = props;

    return (
        <>
            <StyledMenu anchorEl={anchorEl} handleClose={handleClose} navItem={navItem}
                  open={Boolean(anchorEl)}
                  openClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                    >
                        <Box sx={{
                            borderRadius: 4,
                            backgroundColor: '#EBEEF2',
                            padding:2
                        }}>
                            <Grid container spacing={3} paddingX={10}>
                                {
                                    navItem && navItem.children && navItem.children.map((menuSection, index) => {

                                        return (menuSection.label !== undefined) 
                                        ? <Grid item xs={12} sm={4} key={index} >

                                            <Box
                                                sx={{
                                                display: "flex",
                                                alignItems: "top",
                                                }}
                                            >
                                                <Box id="images" color='primary'>{menuSection.icon}</Box>
                                                <Box sx={{alignItems:'center',marginLeft:1}}>

                                                    <Typography color='#00305E' fontFamily='Raleway' fontWeight={800} paragraphVariant="body2" sx={{marginBottom:1}}>
                                                        {menuSection.label}
                                                    </Typography>
                                                    {
                                                        menuSection.children && menuSection.children.map((menuSectionItem, index) => {
                                                            return <CustomMenuItem itemLabel={menuSectionItem.label} handleClose={handleClose} key={index} />
                                                        })
                                                    }

                                                </Box>
                                            </Box>

                                            {/* <Typography variant="subtitle1" gutterBottom color='primary'>{menuSection.label}</Typography>
                                            <Divider />
                                            {
                                                menuSection.children && menuSection.children.map((menuSectionItem, index) => {
                                                    return <CustomMenuItem itemLabel={menuSectionItem.label} handleClose={handleClose} key={index} />
                                                })
                                            } */}
                                        </Grid> : <>{
                                            menuSection.otherExtraComponents.map((otherComponent,subIndex)=>{
                                                return <Grid item xs={12} key={index} sm={4} >
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
        <Box>
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
        </Box>
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
