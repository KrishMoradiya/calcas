import React from 'react';
import {CustomButton} from 'calcas-theme/src/components/button/CustomButton';
import { fn } from '@storybook/test';

export default {
    title: 'Components/CustomButton',
    component: CustomButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select',options:['primary','secondary'] },
        variant : {control: 'select',options:['contained','outlined','text']},
        fontColor: { control: 'select',options:['primary','secondary','text','divider'] },
        fontFamily: { control: 'select',options:['Roboto','Raleway'] },
        isMenuButton: {control:'boolean'},
        isMenuListOpen: {control:'boolean'},
        paddingX: {control: 'number'},
        paddingY: {control: 'number'},
        fontWeight: {control:'select',options: [100,200,300,400,500,600,700,800]},
        fontStyle: 'normal',
        fontSize: {control:'select',options: ['10px','11px','12px','13px','14px','15px','16px','17px','18px','19px','20px','21px']},
        lineHeight: {control:'select',options: ['10px','11px','12px','13px','14px','15px','16px','17px','18px','19px','20px','21px','22px','23px','24px']},
    },
    args: {
        title: 'Click Here',
    }
}
export const Primary ={}