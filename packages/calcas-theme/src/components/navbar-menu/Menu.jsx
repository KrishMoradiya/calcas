import React, {useEffect} from 'react';
import {Menu,Box, Button, MenuItem, ThemeProvider, Typography, Paper, MenuList, Grid, Container} from "@mui/material";
import { CustomButton} from "../button/CustomButton";
import {MenuPropTypes,
MenuDefaultProps} from "./MenuBar.propTypes";
import './menu.css'

const CustomMenu = (props) => {
    const {
        menuItemList,
        origin
    } = props;
    console.log(menuItemList+" this is object")

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const anchorOrigin = {
        vertical: 'top',
        horizontal: 'right',
    }
    const transformOrigin = {
        vertical: 'top',
        horizontal: 'top',
    }

    return (
        <>
            <CustomButton
                    color="primary"
                    fontColor="text"
                    fontFamily="Raleway"
                    title={menuItemList.label}
                    variant="text"
                    onClick={handleClick}
                />
            <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={origin.anchor}
                    transformOrigin={origin.transform}
                >
                    <NestedMenu item={menuItemList.children} />

                        {
                            menuItemList.children.map((menuItem, index) => {
                                console.log(menuItem);
                                return (menuItem.children === undefined)?
                                    (
                                            <MenuItem onClick={handleClose} key={index} color='primary' >
                                                <Typography color="primary">{menuItem.label}</Typography>
                                            </MenuItem>
                                    ) :
                                    <div><CustomMenu menuItemList={menuItem} origin={{anchor:anchorOrigin,transform:transformOrigin}} key={index} /></div>
                            })
                        }
                </Menu>

        </>
    );
};

CustomMenu.propTypes = {
    ...MenuPropTypes
}
CustomMenu.defaultProps = {
    ...MenuDefaultProps
}
export default CustomMenu;
