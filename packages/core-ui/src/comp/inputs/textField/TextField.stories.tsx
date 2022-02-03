import { Meta, Story } from '@storybook/react';
import React from 'react';
import type { Props as TextFieldProps } from './TextField';
import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField,
} as Meta<TextFieldProps>;

const Template: Story<TextFieldProps> = function Template(args: TextFieldProps) {
  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  label: 'Username',
  defaultValue: 'john.doe@story.com',
  required: true,
  disabled: true,
  error: false,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Password',
  defaultValue: 'thisismypassword',
  required: false,
  disabled: false,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  defaultValue: 'john.doe@story.com',
  required: false,
  disabled: false,
  error: true,
  helperText: 'Incorrect entry.',
};
