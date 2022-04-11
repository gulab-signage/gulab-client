import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import React, { useCallback, useContext } from 'react';
import SidebarContext from './SidebarContext';

export default function SidebarControl() {
  const { open, setOpen } = useContext(SidebarContext);

  const handleOnClick = useCallback(() => {
    if (setOpen) {
      setOpen(!open);
    }
  }, [open, setOpen]);

  return (
    <IconButton onClick={handleOnClick}>
      <MenuRoundedIcon />
    </IconButton>
  );
}
