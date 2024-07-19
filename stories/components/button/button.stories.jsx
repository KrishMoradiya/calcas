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
        fontSize: {control:'select',options: [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},
        lineHeight: {control:'select',options: [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},
    },
    args: {
        title: 'Click Here',
    }
}
export const Primary ={}