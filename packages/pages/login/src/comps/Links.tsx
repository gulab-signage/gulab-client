import type { SeamlessTransitionChildProps } from '@gulab-client/core-ui';
import { SeamlessTransition } from '@gulab-client/core-ui';
import { useTranslation } from '@gulab-client/pages-login/src/i18n';
import Hash from '@gulab-client/pages-login/src/types/Hash';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Trans } from 'react-i18next';

function LoginLinks({ st, style }: Partial<SeamlessTransitionChildProps>, ref: React.ForwardedRef<HTMLDivElement>) {
  const { t } = useTranslation();
  return (
    <Grid
      ref={ref}
      style={style}
      container
      direction='column'
      justifyContent='space-between'
      sx={{ mt: 2 }}
      data-st={st}
    >
      <Grid item>
        <Link href='#forgotPassword' underline='hover' sx={{ fontSize: '1.4rem' }}>
          {t('login.forgotPassword')}
        </Link>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Typography variant='body2' component='span'>
            {t('login.notRegistered')}
          </Typography>
        </Grid>
        <Grid item>
          <Link href={Hash.Register} underline='hover' sx={{ fontSize: '1.4rem' }}>
            {t('login.registerNow')}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

const LoginLinksForwardRef = React.forwardRef<HTMLDivElement, Partial<SeamlessTransitionChildProps>>(LoginLinks);

function RegisterLinks({ st, style }: Partial<SeamlessTransitionChildProps>, ref: React.ForwardedRef<HTMLDivElement>) {
  const { t } = useTranslation();
  return (
    <Grid
      ref={ref}
      style={style}
      container
      direction='column'
      justifyContent='space-between'
      sx={{ mt: 2 }}
      data-st={st}
    >
      <Grid item>
        <Typography variant='body2' component='span'>
          <Trans
            t={t}
            i18nKey='register.agreeToTerms'
            components={{
              aTerms: <Link href='#terms' target='_blank' underline='hover' />,
              aData: <Link href='#data-policy' target='_blank' underline='hover' />,
              aCookies: <Link href='#cookies-policy' target='_blank' underline='hover' />,
            }}
          />
        </Typography>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Typography variant='body2' component='span'>
            {t('register.alreadyRegistered')}
          </Typography>
        </Grid>
        <Grid item>
          <Link href={Hash.Login} underline='hover' sx={{ fontSize: '1.4rem' }}>
            {t('register.loginNow')}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

const RegisterLinksForwardRef = React.forwardRef<HTMLDivElement, Partial<SeamlessTransitionChildProps>>(RegisterLinks);

type Props = {
  isRegister: boolean;
};

export default function Links({ isRegister }: Props) {
  return (
    <SeamlessTransition
      transitionIndicator={isRegister}
      firstComp={<LoginLinksForwardRef />}
      secondComp={<RegisterLinksForwardRef />}
    />
  );
}
