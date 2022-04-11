import type { PropsWithChildren } from 'react';
import React, { useMemo, useState } from 'react';
import SidebarContext from './SidebarContext';

export default function SidebarProvider({ children }: PropsWithChildren<unknown>) {
  const [open, setOpen] = useState(true);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}
