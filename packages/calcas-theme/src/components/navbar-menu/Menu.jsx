import React, {useEffect} from 'react';
import {Menu,Box, Button, MenuItem, ThemeProvider, Typography, Paper, MenuList, Grid, Container} from "@mui/material";
import { CustomButton} from "../button/CustomButton";
import {MenuPropTypes,
MenuDefaultProps} from "./MenuBar.propTypes";
import NestedMenu from './NestedMenu';
import { MenuOpen } from '@mui/icons-material';

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
                    isMenuButton={true}
                    isMenuListOpen={open}
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
                        {/*<Paper component="section" sx={{ border: '1px dashed grey',maxWidth:'fit-content' }}>*/}
                            <MenuItem sx={{width:'700px',height:'200px'}}>
                            <NestedMenu item={menuItemList.children} />
                            </MenuItem>
                        {/*</Paper>*/}
                        
                        {/* {
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
                        } */}
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
