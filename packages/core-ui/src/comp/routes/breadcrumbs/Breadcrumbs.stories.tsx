import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import type { Props as BreadcrumbsProps } from './Breadcrumbs';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as Meta<BreadcrumbsProps>;

const Template: Story<BreadcrumbsProps> = function Template(args: BreadcrumbsProps) {
  return (
    <BrowserRouter>
      <Breadcrumbs {...args} />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {
  location: '/presentation/widgets/social-app/#start',
};
