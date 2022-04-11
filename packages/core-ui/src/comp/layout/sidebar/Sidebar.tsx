import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import BottomBar from './BottomBar';
import Header from './Header';
import type { Props as MenuListProps } from './MenuList';
import MenuList from './MenuList';
import SidebarContext from './SidebarContext';

// TODO: Create whitelabel system
const whitelabel = {
  availableLanguages: ['en-GB', 'mk-MK', 'ko-KR', 'zh-CN', 'zh-HK'],
  brandName: 'Gulab',
  sidebar: {
    bottomBar: {
      height: 48,
    },
    header: {
      height: 80,
    },
    width: 272,
  },
};

const List = styled.div`
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.grey[200]};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.grey[400]};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.grey[600]};
  }
`;

export type Props = {
  lists: MenuListProps[];
};

export default function Sidebar({ lists }: Props) {
  const { open, setOpen } = useContext(SidebarContext);
  const isSmallDevice = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const variant = useMemo(() => (isSmallDevice ? 'temporary' : 'permanent'), [isSmallDevice]);
  const hideBackdrop = useMemo(() => isSmallDevice === false, [isSmallDevice]);
  const ModalProps = useMemo(() => ({ keepMounted: isSmallDevice }), [isSmallDevice]);
  const PaperProps = useMemo(
    () => ({
      sx: { width: isSmallDevice ? '90%' : whitelabel.sidebar.width, overflow: 'hidden' },
    }),
    [isSmallDevice]
  );

  // On small devices the sidebar should be initially closed.
  // We don't want the siebar to open when re-sizing the window.
  useEffect(() => {
    if (setOpen) {
      setOpen(isSmallDevice === false);
    }
  }, [isSmallDevice, setOpen]);

  const handleOnClose = useCallback(() => {
    if (setOpen) {
      setOpen(false);
    }
  }, [setOpen]);

  return (
    <Drawer
      anchor='left'
      open={open}
      variant={variant}
      hideBackdrop={hideBackdrop}
      onClose={handleOnClose}
      ModalProps={ModalProps}
      PaperProps={PaperProps}
    >
      <Header brandName={whitelabel.brandName} height={whitelabel.sidebar.header.height} />
      <Divider variant='middle' />
      <List>
        {lists.map(({ key, ...list }) => (
          <MenuList key={key} {...list} />
        ))}
      </List>
      <BottomBar availableLanguages={whitelabel.availableLanguages} height={whitelabel.sidebar.bottomBar.height} />
    </Drawer>
  );
}
