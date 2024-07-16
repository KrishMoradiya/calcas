import React, {useState} from "react";
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

export const Navbar = (props) => {

    const {
        items
    } = props;

    const anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'left',
    }
    const transformOrigin = {
        vertical: 'top',
        horizontal: 'left',
    }

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
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src='https://www.calcas.com/o/CCMC-theme/images/calcas-logo.svg' />
                    </Box>
                    {
                        navItems.length > 0 && navItems.map((navItem, index) => {
                            return (

                                (navItem.children === undefined)
                                    ? <MenuButton buttonLabel={navItem.label} />
                                    :   <>
                                            <MenuButton buttonLabel={navItem.label} onClick={(e)=>{handleMenuClick(e,navItem)}} />
                                        </>
                            )
                        })
                    }
                    <Button variant="contained" color="primary">Get a quote</Button>
                </Toolbar>
                <Menu anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      MenuListProps={{ onMouseLeave: handleClose }}
                    sx={{
                        height:'100%',
                        '& .css-o821ap-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                            backgroundColor: '#fff',
                            color: '#FFFFFF',
                            webkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                            borderRadius: '4px',
                            boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
                            position: 'absolute',
                            maxWidth:'100%',
                            maxHeight:'100%'
                        },
                        '& .css-6hp17o-MuiList-root-MuiMenu-list': {
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                            position: 'relative',
                            outline: 0,
                            borderRadius: 4,
                        }
                    }}
                >
                    <Box sx={{
                        borderRadius: 4,
                        backgroundColor: '#EBEEF2',
                        padding:2
                    }}>
                        <Grid container spacing={3}>
                            {
                                navItem.children && navItem.children.map((menuSection, index) => {
                                    return (menuSection.label !== undefined) ? <Grid item xs={12} sm={4} key={index}>
                                        <Typography variant="subtitle1" gutterBottom color='primary'>{menuSection.label}</Typography>
                                        <Divider />
                                        {
                                            menuSection.children && menuSection.children.map((menuSectionItem, index) => {
                                                return <CustomMenuItem itemLabel={menuSectionItem.label} handleClose={handleClose} key={index} />
                                            })
                                        }
                                    </Grid> : <>{
                                        menuSection.otherExtraComponents.map((otherComponent,index)=>{
                                            return <Grid item xs={12} sm={4} key={index}>
                                                {otherComponent.Component}
                                            </Grid>
                                        })
                                    }</>
                                })
                            }
                        </Grid>
                    </Box>
                </Menu>
            </AppBar>
        </>
    );
};

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


