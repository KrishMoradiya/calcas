import React from 'react';
import {Box, MenuItem, Typography} from "@mui/material";

const MenuList = (props) => {
    const {
        label,
        handleClose
    } = props;
    return (
        <Box>
            <MenuItem onClick={handleClose} color='primary'>
                <Typography color="primary">{label}</Typography>
            </MenuItem>
        </Box>
    );
};

export default MyComponent;
