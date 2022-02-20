import styled from '@emotion/styled';
import type { SeamlessTransitionChildProps } from '@gulab-client/core-ui';
import { SeamlessTransition } from '@gulab-client/core-ui';
import { useTranslation } from '@gulab-client/pages-login/src/i18n';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ReactComponent as LogoB16 } from 'assets/logo.svg';
import React from 'react';

// TODO: margin: 0 ${({ theme }) => theme.spacing(2)};
// TODO: whitelabel.logoDefault
const Logo = styled(LogoB16)`
  height: 72px;
  margin: 0 16px;
  vertical-align: middle;
  path {
    stroke: black !important;
  }
`;

// TODO: margin-bottom: ${({ theme }) => theme.spacing(2)};
// TODO: color: ${({ theme }) => theme.palette.text.secondary};
const Title = styled(Typography)`
  margin-bottom: 16px;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

const CompanyName = styled(Typography)`
  vertical-align: middle;
  font-weight: 700;
`;

function Caption(
  { st, style, children }: React.PropsWithChildren<Partial<SeamlessTransitionChildProps>>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Grid ref={ref} style={style} item alignSelf='center' sx={{ margin: '16px 0' }} data-st={st}>
      <Typography variant='caption'>{children}</Typography>
    </Grid>
  );
}

const CaptionForwardRef = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Partial<SeamlessTransitionChildProps>>
>(Caption);

type Props = {
  isRegister: boolean;
};

export default function Header({ isRegister }: Props) {
  const { t } = useTranslation();
  return (
    <>
      <Grid item alignSelf='center'>
        <Title variant='h6'>{t('common.content.title')}</Title>
      </Grid>
      <Grid item alignSelf='center'>
        <CompanyName display='inline' sx={{ typography: { xs: 'h5', sm: 'h4' }, fontWeight: { xs: 700, sm: 'h4' } }}>
          Gulabo
        </CompanyName>
        <Logo />
        <CompanyName display='inline' sx={{ typography: { xs: 'h5', sm: 'h4' }, fontWeight: { xs: 700, sm: 'h4' } }}>
          Studio
        </CompanyName>
      </Grid>
      <SeamlessTransition
        transitionIndicator={isRegister}
        firstComp={<CaptionForwardRef>{t('login.content.caption')}</CaptionForwardRef>}
        secondComp={<CaptionForwardRef>{t('register.content.caption')}</CaptionForwardRef>}
      />
    </>
  );
}
