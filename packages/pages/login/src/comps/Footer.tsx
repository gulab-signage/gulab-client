import { useTranslation } from '@gulab-client/pages-login/src/i18n';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

type Props = {
  copyright: string;
};

export default function Footer({ copyright }: Props) {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} justifyContent='center' sx={{ mt: 1 }}>
      <Grid item>
        <Link href='#about' underline='hover' sx={{ fontSize: '1.2rem' }}>
          {t('footer.about')}
        </Link>
      </Grid>
      <Grid item>
        <Link href='#help' underline='hover' sx={{ fontSize: '1.2rem' }}>
          {t('footer.help')}
        </Link>
      </Grid>
      <Grid item>
        <Link href='#more' underline='hover' sx={{ fontSize: '1.2rem' }}>
          {t('footer.more')}
        </Link>
      </Grid>
      <Grid item>
        <Link href='#terms' underline='hover' sx={{ fontSize: '1.2rem' }}>
          {t('footer.terms')}
        </Link>
      </Grid>
      <Grid item>
        <Typography variant='caption'>{copyright}</Typography>
      </Grid>
    </Grid>
  );
}
