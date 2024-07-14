import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {ThemeProvider} from "@mui/material/styles";
import {createTheme} from "@mui/material";
//
// const theme = createTheme({
//     overrides: {
//         MuiMenuItem: {
//             root: {
//                 color: "primary.main",
//             },
//         },
//     },
// });

const sections = {
    Auto: ['Auto', 'Motorcycle', 'Classic Car', 'RV', 'Mexico Auto'],
    Property: ['Home', 'Condo', 'Renters', 'Mobile Home', 'Earthquake', 'Flood', 'Mexico Home'],
    More: ['Umbrella', 'Pet', 'Boat', 'Snowmobile', 'Mexico Watercraft', 'All Other']
};

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    California Casualty
                </Typography>
                <Button color="primary" onClick={handleMenuClick}>Insurance</Button>
                <Button color="primary">Claims</Button>
                <Button color="primary">Customer Care</Button>
                <Button color="primary">Resources</Button>
                <Button color="primary">My Account</Button>
                <Button variant="contained" color="primary">Get a quote</Button>
            </Toolbar>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                <Box sx={{ padding: 2 }}>
                    <Grid container spacing={2}>
                        {Object.keys(sections).map((section) => (
                            <Grid item xs={12} sm={4} key={section}>
                                <Typography variant="subtitle1" gutterBottom color='primary'>{section}</Typography>
                                <Divider />
                                {sections[section].map((item) => (
                                    <MenuItem key={item} onClick={handleClose} color='secondary' sx={{color:'secondary'}}>{item}</MenuItem>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Menu>
        </AppBar>
    );
};

export default NavMenu;
