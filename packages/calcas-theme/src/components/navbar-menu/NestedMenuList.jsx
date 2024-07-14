

import {Box, MenuItem, Typography} from '@mui/material';
import React from 'react';
import TypographyBlock from '../common/typography_block/typographyblock';

function NestedMenuList({item}) {
    return (
        <>
            <Box>    
                <Box component="section" sx={{  maxWidth: "max-content" }}>
                    <Box
                        sx={{
                        display: "flex",
                        alignItems: "top",
                        }}
                    >
                        <Box id="images">{item.icon}</Box>
                        <Box sx={{alignItems:'center',marginLeft:1}}>

                            <Typography color='#00305E' fontFamily='Raleway' fontWeight={800} paragraphVariant="body2" sx={{marginBottom:1}}>
                                {item.label}
                            </Typography>

                        {item.children &&
                            item.children.map((menu, index) => {
                            return (
                                <TypographyBlock
                                    paragraphChildren={menu.label}
                                    paragraphColor="#00305E"
                                    paragraphFontFamily="Raleway"
                                    paragraphVariant="body2"
                                />
                            )
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default NestedMenuList;