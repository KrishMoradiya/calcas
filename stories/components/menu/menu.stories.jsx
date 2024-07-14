import React from 'react';
import CustomMenu from '../../../packages/calcas-theme/src/components/navbar-menu/Menu';
import items from '../../../packages/calcas-theme/src/components/navbar-menu/menu-item';

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
}
const transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
}

export default {
    title: 'Components/CustomMenu',
    component: CustomMenu,
    tags: ['autodocs'],
    args: {
        menuItemList: items[2],
        origin: {
            anchor:anchorOrigin,
            transform:transformOrigin
        }
    }
}
export const Primary = {}