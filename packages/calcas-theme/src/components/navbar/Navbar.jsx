import React, {useState, createContext,useCallback, useContext, useEffect} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TypographyBlock from "../common/typography_block/typographyblock";
import {CustomButton} from "../button/CustomButton";
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
import {StyledAppbar, StyledMenu, StyledNavButtonContainer, StyledSectionLink} from "./Navbar.styles";
import {Button, ImageListItem} from "@mui/material";
import {ExpandLess, ExpandMore,Person} from "@mui/icons-material";
import calcasLogo from '../../assets/images/logo.jpg'


const MyContext = createContext();


export const Navbar = (props) => {

    const {
        items
    } = props;

    const [navItems,setNavItems] = useState(items);
    const [navItem, setNavItem] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState("")

    const open = Boolean(anchorEl);

    const handleMenuClick = (event,navItem,selectedMenu) => {
        setAnchorEl(event.currentTarget);
        setNavItem(navItem);
        setSelectedMenu(selectedMenu);
    };


    const handleClose = () => {
        setAnchorEl(null);
        setSelectedMenu("")
    };

    return (
        <>
            <StyledAppbar position="static" color="text" onMouseLeave={handleClose}>
                <Toolbar>
                    <CalcasLogo />
                    <Container sx={{width: {xs:'0%',sm:'80%',md:'75%',lg:'70%',xl:'60%'},
                        display: {xs:'none',sm:'flex'},
                        justifyContent:'space-evenly',
                        alignItems:'center'}}>
                        <CustomButton
                            title='Get a quote'
                            fontFamily='Raleway'
                            handleMenuClose={handleClose}
                        />
                        <NavbarSelectButton navItems={navItems}
                                            handleMenuClick={handleMenuClick}
                                            selectedMenu={selectedMenu}
                                            handleMenuClose={handleClose}/>
                    </Container>
                </Toolbar>
                <Container>
                    <CustomMenu anchorEl={anchorEl} handleClose={handleClose} navItem={navItem} />
                </Container>
            </StyledAppbar>
        </>
    );
};

export const NavbarSelectButton = (props) => {
    const {
        navItems,
        handleMenuClose,
        handleMenuClick,
        selectedMenu
    } = props;
    return (
        <Box sx={{display:'flex'}}>
                {
                    navItems.length > 0 && navItems.map((navItem, index) => {
                        return (
                            <>
                                <MenuButton buttonLabel={navItem.label} onMouseEnter={(e)=>{handleMenuClick(e,navItem,navItem.label)}} handleMenuClose={handleMenuClose} href={navItem.key} isSelected={(navItem.label === selectedMenu)} />
                            </>
                        )
                    })
                }
                <UserMenu handleMenuClose={handleMenuClose} />
        </Box>
    )
}
export const MenuButton = (props) =>{
    const {
        buttonLabel,
        onMouseEnter = (onMouseEnter === undefined) ? ()=>{} : onMouseEnter,
        href,
        isSelected,
        handleMenuClose
    } = props;
    return (
        // <Grid item sx={{display:'flex',alignItems:'center'}}>
        <Box sx={{display:'flex',alignItems:'center'}}>
            <Link href={href} color="secondary"
                  onMouseEnter={onMouseEnter}
                  marginX='6px'
                  underline='none'
            >
                <Typography color='primary' fontFamily='Raleway' variant='body2' sx={{ fontSize:{xs:8,sm:12,md:14}}}>
                    {buttonLabel}
                </Typography>
            </Link>
            {(isSelected)?<ExpandLess color='primary' sx={{alignItems:'center',height:'100%'}} fontSize='small' onClick={handleMenuClose} /> : <ExpandMore color='primary' fontSize='small' onClick={onMouseEnter} />}
        </Box>

        // </Grid>
    )
}
export const UserMenu = ({handleMenuClose})=>{
    return (
        <>
            <Box sx={{display:'flex',alignItems:'center'}} onMouseEnter={handleMenuClose}>
                <Person color='primary' fontSize='small' />
                <Link href='/my-account' underline='none'>
                    <Typography color='black' fontFamily='Raleway' variant='body2' sx={{ fontSize:{xs:8,sm:12,md:14}}}>
                        My Account
                    </Typography>
                </Link>
            </Box>
        </>
    )
}

export const CalcasLogo = () => {
    return (
        <>
            <Box sx={{ display: {sm: 'flex',width: {sm:'16%',xs:'80%'} } }}>
                <ImageListItem key={0}>
                    <img
                        src={calcasLogo}
                        alt="Calcas logo"
                    />
                </ImageListItem>
                {/*<img src='https://www.calcas.com/o/CCMC-theme/images/calcas-logo.svg' style={{ width:{xs:'40%',sm:'40%',md:'40%',lg:'40%',xl:'40%'} }} alt="Calcas Logo" />*/}
            </Box>
        </>
    )
}

export const CustomMenuItem = (props) =>{
    const {
        itemLabel,
        href,
        handleClose
    } = props;

    return (
        <>
            <StyledSectionLink href={href} underline='none' key={itemLabel} margin={0} padding={0} onClick={(e)=>handleClose()}>
                <TypographyBlock
                    paragraphChildren={itemLabel}
                    paragraphColor="secondary"
                    paragraphFontFamily="Raleway"
                    paragraphVariant="caption"
                />
            </StyledSectionLink>
        </>
    )
}

export const CustomMenu = (props) => {
    const {
        anchorEl,
        navItem,
        handleClose
    } = props;
    return (
        <>
            <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                MenuListProps={{onMouseLeave:handleClose}}
            >
                        <Box
                            sx={{
                            borderRadius: 4,
                            backgroundColor: '#EBEEF2',
                            padding:2, pointerEvents:'auto'
                        }}>
                            <Grid container
                                  direction="row"
                                  justifyContent="space-around"
                                  alignItems="flex-start"
                                spacing={8}>
                                {
                                    navItem && navItem.children && navItem.children.map((menuSection, index) => {

                                        return (menuSection.label !== undefined) 
                                        ? <Grid item key={index}>

                                            <Box
                                                sx={{
                                                display: "flex",
                                                alignItems: "top",
                                                    paddingY:2,
                                                    paddingX:3
                                                }}
                                            >
                                                <Box id="images" color='primary'>{menuSection.icon}</Box>
                                                <Box sx={{alignItems:'center',marginLeft:1}}>

                                                    <Typography color='#00305E' fontFamily='Raleway' fontWeight={800} paragraphVariant="body2" sx={{marginBottom:1}}>
                                                        {menuSection.label}
                                                    </Typography>
                                                    {
                                                        menuSection.children && menuSection.children.map((menuSectionItem, index) => {
                                                            return <CustomMenuItem itemLabel={menuSectionItem.label} href={menuSectionItem.key} key={index} handleClose={handleClose} />
                                                        })
                                                    }

                                                </Box>
                                            </Box>
                                        </Grid> : <>{
                                            menuSection.otherExtraComponents.map((otherComponent,subIndex)=>{
                                                return <Grid item key={index}>
                                                        <Box sx={{paddingY:2,
                                                            paddingX:3}}>
                                                            {otherComponent.Component}
                                                        </Box>
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
