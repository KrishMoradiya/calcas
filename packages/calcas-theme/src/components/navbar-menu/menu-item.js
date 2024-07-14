import {BookOutlined, HomeOutlined} from "@mui/icons-material";
import React from 'react';

const items = [
    {
        label: "Home",
        key: "/",
        icon: <HomeOutlined/>
    },
    {
        label: "About us",
        key: "/about-us",
        icon: <HomeOutlined/>
    },
    {
        key: 'sub1',
        label: 'Services',
        icon: <HomeOutlined/>,
        children: [
            {
                label: "Auto",
                key: "/auto",
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
        ],
    },
    {
        label: "Blogs",
        key: "/blogs",
        icon: <BookOutlined />
    },
];
export default items;