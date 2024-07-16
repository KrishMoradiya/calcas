import React, { useState} from "react";
import { CustomButton} from "../button/CustomButton";
import CustomMenu from "./Menu";
import PropTypes from "prop-types";
import {NavbarPropTypes,
NavbarMenuDefaultProps} from "./MenuBar.propTypes";
import {Box, Container, Grid, Typography} from "@mui/material";
import TypographyBlock from "../common/typography_block/typographyblock";
import './menu.css'

const Navbar = (props) => {

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

    const [menuItems, setMenuItems] = useState(items);

    return (
        <>
                <Container>
                    <Box sx={{display:'flex'}}>
                        <Grid container>
                            <Grid item sm={0} md={3}>
                                <Typography color='primary'>
                                    Calcas Casualty
                                </Typography>
                            </Grid>
                            <Grid item sm={0} md={7}>
                                <Box sx={{}}>
                                    {
                                        menuItems && menuItems.length > 0 && menuItems.map((item, index) => {
                                            return (item.children === undefined)?
                                                (
                                                        <CustomButton
                                                            color="primary"
                                                            fontColor="text"
                                                            fontFamily="Raleway"
                                                            title={item.label}
                                                            variant="text" key={index}
                                                        />
                                                )
                                                :
                                                <CustomMenu key={index} menuItemList={item} origin={{anchor:anchorOrigin,transform:transformOrigin}} />
                                        })
                                    }
                                </Box>
                            </Grid>
                            <Grid item sm={0} md={2}>
                                <TypographyBlock paragraphChildren="Paragraph Text"
                                                 paragraphColor="text.secondary"
                                                 paragraphVariant="body2"/>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>

        </>
    );
}

Navbar.propTypes = {
    ...NavbarPropTypes
};
Navbar.defaultProps = {
    ...NavbarMenuDefaultProps
}
export default Navbar;
