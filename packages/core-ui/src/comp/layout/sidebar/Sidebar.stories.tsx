import MonitorIcon from '@mui/icons-material/Monitor';
import SettingsIcon from '@mui/icons-material/Settings';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import type { Props as SidebarProps } from './Sidebar';
import Sidebar from './Sidebar';
import SidebarControl from './SidebarControl';
import SidebarProvider from './SidebarProvider';

const lists = [
  {
    key: 'general',
    subheader: 'General',
    items: [
      {
        key: 'displays',
        label: 'Displays',
        icon: MonitorIcon,
      },
      {
        key: 'widgets',
        label: 'Widgets',
        icon: WidgetsIcon,
        selected: true,
        items: [
          {
            key: 'twitter',
            label: 'Twitter',
          },
          {
            key: 'instagram',
            label: 'Instagram',
          },
          {
            key: 'facebook',
            label: 'Facebook',
          },
        ],
      },
      {
        key: 'presentations',
        label: 'Presentations',
        icon: SlideshowIcon,
      },
      {
        key: 'settings',
        label: 'Settings',
        icon: SettingsIcon,
      },
    ],
  },
];

export default {
  title: 'Sidebar',
  component: SidebarProvider,
} as Meta<SidebarProps>;

const Template: Story<SidebarProps> = function Template(args: SidebarProps) {
  return (
    <SidebarProvider>
      <Sidebar {...args} />
      <SidebarControl />
    </SidebarProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  lists,
};
