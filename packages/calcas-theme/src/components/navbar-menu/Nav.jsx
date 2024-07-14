import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {FormControl, Menu, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

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
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        California Casualty
                    </Typography>
                    {
                        navItems.length > 0 && navItems.map((navItem, index) => {
                            return (

                                (navItem.children === undefined)
                                    ? <CustomButton buttonLabel={navItem.label} />
                                    :
                                    <>
                                        <CustomButton buttonLabel={navItem.label} onClick={handleMenuClick}/>
                                        <Menu anchorEl={anchorEl}
                                              open={Boolean(anchorEl)}
                                              onClose={handleClose}
                                              MenuListProps={{ onMouseLeave: handleClose }}>
                                            <Box sx={{ padding: 2 }}>
                                                <Grid container spacing={2}>
                                                    {
                                                        navItems.children && navItems.children.map((menuSection, index) => {
                                                            <Grid item xs={12} sm={4} key={index}>
                                                                <Typography variant="subtitle1" gutterBottom color='primary'>{menuSection.label}</Typography>
                                                                <Divider />
                                                                {
                                                                    menuSection.children && menuSection.children.map((menuSectionItem, index) => {
                                                                        <CustomMenuItem itemLabel={menuSectionItem.label} handleClose={handleClose} key={index} />
                                                                    })
                                                                }
                                                            </Grid>
                                                        })
                                                    }
                                                </Grid>
                                            </Box>
                                        </Menu>
                                    </>
                            )
                        })
                    }
                    <Button variant="contained" color="primary">Get a quote</Button>
                </Toolbar>
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
            <MenuItem key={itemLabel} onClick={handleClose} color='secondary' sx={{color:'secondary'}}>{itemLabel}</MenuItem>
        </>
    )
}

export const CustomButton = (props) =>{
     const {
         buttonLabel,
         onClick = (onClick === undefined) ? ()=>{} : onClick
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


