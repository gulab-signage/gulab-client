import React from 'react';

export type TypeSidebarContext = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = React.createContext<TypeSidebarContext>({});

export default SidebarContext;
