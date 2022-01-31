import Button from '@mui/material/Button';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import ThemeControl from './ThemeControl';

export default {
  title: 'ThemeControl',
  component: ThemeControl,
} as Meta;

const Template: Story = function Template() {
  return (
    <div>
      <ThemeControl />
      <Button variant='contained' color='primary'>
        Label
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
