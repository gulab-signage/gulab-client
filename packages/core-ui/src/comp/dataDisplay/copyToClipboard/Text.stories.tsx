import { Meta, Story } from '@storybook/react';
import React from 'react';
import type { Props as TextProps } from './Text';
import Text from './Text';

export default {
  title: 'CopyToClipboard',
  component: Text,
} as Meta<TextProps>;

const Template: Story<TextProps> = function Template(args: TextProps) {
  return (
    <div style={{ fontSize: '1.4rem' }}>
      <Text {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  block: false,
  children: 'Click to copy this text!',
  id: 'default',
};
