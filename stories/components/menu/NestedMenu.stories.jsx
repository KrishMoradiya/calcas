import React from 'react';
import {BookOutlined, HomeOutlined} from "@mui/icons-material";
import NestedMenu from 'calcas-theme/src/components/navbar-menu/NestedMenu';
const childrenList = [
    {
        label: "Auto",
        key: "/",
        icon: <HomeOutlined color='primary' sx={{display:'flex',alignItems:'center'}} />,
        children: [
            {
                label: "Auto",
                key: "/",
            },
            {
                label: "Motorcycle",
                key: "/about-us",
            },
            {
                label: "Classic car",
                key: "/about-us",
            },
            {
                label: "RV",
                key: "/about-us",
            },
        ]
    },
    {
        label: "Property",
        key: "/about-us",
        icon: <BookOutlined color='primary' sx={{display:'flex',alignItems:'center'}} />,
        children: [
            {
                label: "Home",
                key: "/",
            },
            {
                label: "Condo",
                key: "/about-us",
            },
            {
                label: "Renters",
                key: "/about-us",
            },
        ]
    },
];
export default {
    title: 'Components/NestedMenu',
    component: NestedMenu,
    tags: ['autodocs'],
    args: {
        item: childrenList,
    }
}
export const Primary = {}