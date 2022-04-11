import type { SvgIconComponent } from '@mui/icons-material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { styled as muiStyled } from '@mui/material/styles';
import React, { useCallback, useMemo, useState } from 'react';

type DropdownIconProps = {
  open: boolean;
};

const DropdownIcon = muiStyled(ChevronRightRoundedIcon)<DropdownIconProps>`
  transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition-property: transform;
`;

const ListItemButtonStyled = muiStyled(ListItemButton)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  color: ${({ theme }) => theme.palette.text.secondary};

  & .MuiListItemIcon-root {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  & .MuiTypography-root {
    font-size: 1.4rem;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.primary.main};

    & .MuiListItemIcon-root {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    & .MuiTypography-root {
      font-weight: 600;
    }
  }
`;

type MenuItemProps = {
  key: string;
  label: string;
  icon?: SvgIconComponent;
  selected?: boolean;
  disabled?: boolean;
  items?: MenuItemProps[];
};

function MenuItem({ label, icon: Icon, selected, disabled, items }: MenuItemProps) {
  const [open, setOpen] = useState(false);
  const hasItems = useMemo(() => items && items.length > 0, [items]);
  const insetText = useMemo(() => Icon === undefined, [Icon]);

  const handleOnClick = useCallback(() => setOpen((current) => !current), []);

  return (
    <div>
      <ListItemButtonStyled disabled={disabled} selected={selected} onClick={handleOnClick}>
        {Icon && (
          <ListItemIcon>
            <Icon sx={{ fontSize: '2.2rem' }} />
          </ListItemIcon>
        )}
        <ListItemText inset={insetText} primary={label} sx={{ fontSize: '1.4rem' }} />
        {hasItems && <DropdownIcon open={open} />}
      </ListItemButtonStyled>
      <Collapse in={open} timeout='auto'>
        {hasItems && (
          <List>
            {items?.map(({ key, ...item }) => (
              <MenuItem key={key} {...item} />
            ))}
          </List>
        )}
      </Collapse>
    </div>
  );
}

MenuItem.defaultProps = {
  icon: undefined,
  disabled: false,
  selected: false,
  items: [],
};

const ListStyled = muiStyled(List)`
  padding: ${({ theme }) => theme.spacing(1)};

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(0.5)};
  }
`;

const ListSubheaderStyled = muiStyled(ListSubheader)`
  padding: ${({ theme }) => theme.spacing(2, 2, 0, 1)};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  line-height: initial;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export type Props = {
  key: string;
  items: MenuItemProps[];
  subheader?: string;
};

export default function MenuList({ subheader, items }: Props) {
  const subheaderValue = useMemo(() => {
    if (subheader) {
      return <ListSubheaderStyled>{subheader}</ListSubheaderStyled>;
    }
    return undefined;
  }, [subheader]);
  return (
    <ListStyled subheader={subheaderValue}>
      {items.map(({ key, ...item }) => (
        <MenuItem key={key} {...item} />
      ))}
    </ListStyled>
  );
}
