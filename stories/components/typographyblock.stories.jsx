import React from 'react';
import TypographyBlock from '../../packages/calcas-theme/src/components/common/typography_block/typographyblock';

export default {
  title: 'Components/TypographyBlock',
  component: TypographyBlock,
  argTypes: {
    headerVariant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    paragraphVariant: {
      control: {
        type: 'select',
        options: ['body1', 'body2', 'subtitle1', 'subtitle2', 'caption'],
      },
    },
    headerChildren: {
      control: 'text',
    },
    paragraphChildren: {
      control: 'text',
    },
    headerFontFamily: {
      control: {
        type: 'select',
        options: ['Raleway', 'Roboto'],
      },
    },
    paragraphFontFamily: {
      control: {
        type: 'select',
        options: ['Raleway', 'Roboto'],
      },
    },
    headerColor: {
      control: 'color',
    },
    paragraphColor: {
      control: 'color',
    },
  },
};

// Template for a basic story
const Template = args => <TypographyBlock {...args} />;

// Example story with both header and paragraph
export const BothHeaderAndParagraph = Template.bind({});
BothHeaderAndParagraph.args = {
  headerVariant: 'h1',
  paragraphVariant: 'body1',
  headerChildren: 'Header Text',
  paragraphChildren: 'Paragraph Text',
  headerFontFamily: 'Raleway',
  paragraphFontFamily: 'Roboto',
  headerColor: 'text.secondary',
  paragraphColor: 'text.secondary',
};

// Story with just the header
export const JustHeader = Template.bind({});
JustHeader.args = {
  headerVariant: 'h1',
  headerChildren: 'Header Text',
  headerFontFamily: 'Raleway',
  headerColor: 'text.secondary',
};

// Story with just the paragraph
export const JustParagraph = Template.bind({});
JustParagraph.args = {
  paragraphVariant: 'body1',
  paragraphChildren: 'Paragraph Text',
  paragraphFontFamily: 'Roboto',
  paragraphColor: 'text.secondary',
};
