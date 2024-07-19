import {BookOutlined, HomeOutlined} from "@mui/icons-material";
import React from 'react';
import {ClaimExtraComponent} from "../navbar/Navbar";


const items = [
    {
        label: "Insurance",
        key: "/insurance",
        icon: <HomeOutlined color='primary'/>,
        children: [
            {
                label: "Auto",
                key: "/auto",
                icon: <HomeOutlined color='primary'/>,
                children: [
                    {
                        label:"Auto",
                        key: "/auto"
                    },
                    {
                        label:"Motorcycle",
                        key: "/motorcycle"
                    },
                    {
                        label:"Classic car",
                        key: "/classic-car"
                    },
                    {
                        label:"RV",
                        key: "/rv"
                    },
                    {
                        label:"Mexico Auto",
                        key: "/mexico-auto"
                    },
                ]
            },
            {
                label: "Property",
                key: "/property",
                icon: <BookOutlined color='primary'/>,
                children: [
                    {
                        label:"Home",
                        key: "/auto"
                    },
                    {
                        label:"Condo",
                        key: "/motorcycle"
                    },
                    {
                        label:"Renters",
                        key: "/classic-car"
                    },
                    {
                        label:"Mobile Home",
                        key: "/rv"
                    },
                    {
                        label:"Earthquake",
                        key: "/mexico-auto"
                    },
                    {
                        label:"Flood",
                        key: "/mexico-auto"
                    },
                    {
                        label:"Mexico Home",
                        key: "/mexico-auto"
                    },
                ]
            },
            {
                label: "More",
                key: "/more",
                icon: <HomeOutlined color='primary'/>,
                children: [
                    {
                        label:"Umbrella",
                        key: "/auto"
                    },
                    {
                        label:"Pet",
                        key: "/motorcycle"
                    },
                    {
                        label:"Boat",
                        key: "/classic-car"
                    },
                    {
                        label:"Snow Mobile",
                        key: "/rv"
                    },
                    {
                        label:"Mexico watercraft",
                        key: "/mexico-auto"
                    },
                    {
                        label:"All Other",
                        key: "/mexico-auto"
                    },
                ]
            }
        ]
    },
    {
        label: "Claims",
        key: "/",
        icon: <BookOutlined/>,
        children: [
            {
                label: "Claim 1",
                key: "/auto",
                icon: <HomeOutlined/>,
                children: [
                    {
                        label:"claim 1",
                        key: "/auto"
                    },
                    {
                        label:"claim 2",
                        key: "/motorcycle"
                    },
                    {
                        label:"claim 3",
                        key: "/classic-car"
                    }
                ]
            },
            {
                label: "More",
                key: "/more",
                icon: <HomeOutlined/>,
                children: [
                    {
                        label:"Umbrella",
                        key: "/auto"
                    },
                    {
                        label:"Pet",
                        key: "/motorcycle"
                    },
                    {
                        label:"Boat",
                        key: "/classic-car"
                    },
                    {
                        label:"Snow Mobile",
                        key: "/rv"
                    },
                    {
                        label:"Mexico watercraft",
                        key: "/mexico-auto"
                    },
                    {
                        label:"All Other",
                        key: "/mexico-auto"
                    },
                ]
            },
            {
                otherExtraComponents: [
                    {Component:<ClaimExtraComponent />}
                ]
            }
        ]
    },
    {
        label: "Customer Care",
        key: "/",
        icon: <HomeOutlined/>,
        children: [
            {
                label: "Claim 1",
                key: "/auto",
                icon: <HomeOutlined/>,
                children: [
                    {
                        label:"claim 1",
                        key: "/auto"
                    },
                    {
                        label:"claim 2",
                        key: "/motorcycle"
                    },
                    {
                        label:"claim 3",
                        key: "/classic-car"
                    }
                ]
            },
            {
                label: "More",
                key: "/more",
                icon: <HomeOutlined/>,
                children: [
                    {
                        label:"Umbrella",
                        key: "/auto"
                    },
                    {
                        label:"Pet",
                        key: "/motorcycle"
                    },
                    {
                        label:"Boat",
                        key: "/classic-car"
                    },
                    {
                        label:"Snow Mobile",
                        key: "/rv"
                    },
                    {
                        label:"Mexico watercraft",
                        key: "/mexico-auto"
                    },
                    {
                        label:"All Other",
                        key: "/mexico-auto"
                    },
                ]
            }
        ]
    },
    {
        label: "Resources",
        key: "/",
        icon: <BookOutlined/>,
        children: [
            {
                label: "Claim 1",
                key: "/auto",
                icon: <HomeOutlined/>,
                children: [
                    {
                        label:"claim 1",
                        key: "/auto"
                    },
                    {
                        label:"claim 2",
                        key: "/motorcycle"
                    },
                    {
                        label:"claim 3",
                        key: "/classic-car"
                    }
                ]
            },
            {
                label: "More",
                key: "/more",
                icon: <HomeOutlined/>,
                children: [
                    {
                        label:"Umbrella",
                        key: "/auto"
                    },
                    {
                        label:"Pet",
                        key: "/motorcycle"
                    },
                    {
                        label:"Boat",
                        key: "/classic-car"
                    },
                    {
                        label:"Snow Mobile",
                        key: "/rv"
                    },
                    {
                        label:"Mexico watercraft",
                        key: "/mexico-auto"
                    },
                    {
                        label:"All Other",
                        key: "/mexico-auto"
                    },
                ]
            }
        ]
    },

];
export default items;