import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TypographyBlock from "../common/typography_block/typographyblock";
import NestedMenuList from "./NestedMenuList";

function NestedMenu(props) {
  const { item } = props;

  return (
    <div>
      <Box
        component="section"
        sx={{
          width: '100%',
          borderRadius: 4,
          position: 'absolute',
          backgroundColor: '#EBEEF2',
          mixBlendMode:'normal'
        }}
      >
        <Box sx={{  mx: 6,my: 4 }}>
          <Box display="flex" justifyContent={"space-evenly"}>
            {  
              item.map((item, index) =>{
                return (
                  <NestedMenuList item={item}/>
                )
              })
            }
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default NestedMenu;
