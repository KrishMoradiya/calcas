import React from 'react';
import Button from '../../packages/calcas-theme/src/components/common/button/button';
import StarIcon from '@mui/icons-material/Star';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    hovercolor: {
      control: {
        type: 'color',
      },
    },
    startIcon: {
      control: {
        type: 'boolean',
      },
    },
    endIcon: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'clicked',
    },
    onFocus: {
      action: 'focused',
    },
    onMouseOver: {
      action: 'hovered',
    },
  },
};

const Template = args => {
  const { startIcon, endIcon, ...rest } = args;
  return (
    <Button
      {...rest}
      startIcon={startIcon ? <StarIcon/> : null}
      endIcon={endIcon ?  <StarIcon/> : null}
    />
  );
};

export const containedPrimaryButton = Template.bind({});
containedPrimaryButton.args = {
  children: 'Button',
  variant: 'contained',
  size: 'medium',
  color: 'primary',  
};
export const containedSecondaryButton = Template.bind({});
containedSecondaryButton.args = {
  children: 'Button',
  variant: 'contained',
  size: 'medium',
  color: 'secondary',  
};
export const outlinedPrimaryButton = Template.bind({});
outlinedPrimaryButton.args = {
  children: 'Button',
  variant: 'outlined',
  size: 'medium',
  color: 'primary',  
};
export const outlinedSecondaryButton = Template.bind({});
outlinedSecondaryButton.args = {
  children: 'Button',
  variant: 'outlined',
  size: 'medium',
  color: 'secondary',  
};
export const textPrimaryButton = Template.bind({});
textPrimaryButton.args = {
  children: 'Button',
  variant: 'text',
  size: 'medium',
  color: 'primary',  
};
export const textSecondaryButton = Template.bind({});
textSecondaryButton.args = {
  children: 'Button',
  variant: 'text',
  size: 'medium',
  color: 'secondary',  
};
export const customButton = Template.bind({});
customButton.args = {
  children: 'Button',
  variant: 'contained',
  size: 'large',
  color: '#f50000',  
};
export const buttonWithStartIcon = Template.bind({});
buttonWithStartIcon.args = {
  children: 'Button',
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  startIcon: true,
};

export const buttonWithEndIcon = Template.bind({});
buttonWithEndIcon.args = {
  children: 'Button',
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  endIcon: true,
};

