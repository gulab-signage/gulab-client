import { capitalizeEachWord } from '@gulab-client/utils';
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import React, { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export type Props = {
  location: string;
  muiProps?: BreadcrumbsProps;
};

export default function Breadcrumbs({ location, muiProps }: Props) {
  const [items, setItems] = useState<JSX.Element[]>([]);

  const generateItems = useCallback(
    (loc: string) =>
      loc
        .replace('#', '/#')
        .split('/')
        .filter((value) => value)
        .map((item, index, array) => (
          <Link
            key={item}
            component={RouterLink}
            to={`/${array.slice(0, index + 1).join('/')}`}
            underline='hover'
            sx={{ color: index + 1 === array.length ? 'text.primary' : 'text.secondary' }}
          >
            {capitalizeEachWord(item.replace('#', '').replaceAll('-', ' '))}
          </Link>
        )),
    []
  );

  useEffect(() => {
    setItems(generateItems(location));
  }, [generateItems, location]);

  return (
    <MuiBreadcrumbs aria-label='breadcrumb' data-test='breadcrumbs' {...muiProps}>
      {items}
    </MuiBreadcrumbs>
  );
}

Breadcrumbs.defaultProps = {
  muiProps: {},
};
