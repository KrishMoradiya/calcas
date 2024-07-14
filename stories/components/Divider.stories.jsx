import React from 'react';
import Divider from '../../packages/calcas-theme/src/components/common/divider/Divider';
import backgroundImage from '../../packages/calcas-theme/src/assets/Rectangle65.png';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    backgroundImage: { control: 'text' },
    backgroundColor: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
    backgroundColor:'#FFFFFF',
    width:'100%'
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  backgroundImage: backgroundImage,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  backgroundColor: '#ff0000',
};

export const CustomHeightAndWidth = Template.bind({});
CustomHeightAndWidth.args = {
  height: '10px',
  width: '80%',
};

export const FullFeature = Template.bind({});
FullFeature.args = {
  backgroundImage: backgroundImage,
  backgroundColor: '#00ff00',
  height: '20px',
  width: '100%',
};
