

import {Box, MenuItem, Typography} from '@mui/material';
import React from 'react';
import TypographyBlock from '../common/typography_block/typographyblock';

function NestedMenuList({item}) {
    return (
        <>
            <Box>    
                <Box component="section" sx={{  maxWidth: "max-content" }}>
                <Box
                    component="section"
                    sx={{
                    display: "flex",
                    alignItems: "top",
                    }}
                >
                    <Box component="section" id="images">{item.icon}</Box>
                    <Box component="section" sx={{alignItems:'center',marginLeft:1}}>

                        <Typography color='#00305E' fontFamily='Raleway' fontWeight={800} paragraphVariant="body2" sx={{marginBottom:1}}>
                            {item.label}
                        </Typography>

                    {item.children &&
                        item.children.map((menu, index) => {
                        return (
                            <>
                                <MenuItem>
                            <TypographyBlock
                                paragraphChildren={menu.label}
                                paragraphColor="#00305E"
                                paragraphFontFamily="Raleway"
                                paragraphVariant="body2"
                            /></MenuItem>
                            </>
                        );
                        })}
                    </Box>
                </Box>
                </Box>
            </Box>
        </>
    );
}

export default NestedMenuList;