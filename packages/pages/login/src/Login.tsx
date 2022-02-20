import styled from '@emotion/styled';
import { SeamlessTransition, TextField } from '@gulab-client/core-ui';
import { useTranslation } from '@gulab-client/pages-login/src/i18n';
import Hash from '@gulab-client/pages-login/src/types/Hash';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { ReactComponent as LoginIllustration } from 'assets/login_illustration.svg';
import Header from 'comps/Header';
import Links from 'comps/Links';
import SubmitButtonForwardRef from 'comps/SubmitButton';
import React, { useEffect, useState } from 'react';

const Illustration = styled(LoginIllustration)``;

export default function Login() {
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleHashChange = () => {
    if (Hash.Register === window.location.hash) {
      setIsRegister(true);
    } else if (Hash.Login === window.location.hash) {
      setIsRegister(false);
    }
  };

  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange, false);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  function handleOnChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.currentTarget.value);
  }

  function handleOnChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  function handleOnClickLogin() {
    console.warn(username, password);
  }

  function handleOnClickRegister() {
    console.warn(username, password);
  }

  return (
    <Card variant='outlined' sx={{ display: 'flex', width: { xs: '100%', sm: 'initial' }, borderRadius: 4 }}>
      <CardContent sx={{ width: { xs: '100%', sm: 'initial' }, p: { xs: 4, sm: 8 } }}>
        <Grid container direction='column' height='100%' justifyContent='center'>
          <Header isRegister={isRegister} />
          <Grid item>
            <TextField
              type='email'
              label={t('common.username.label')}
              placeholder={t('common.username.placeholder')}
              fullWidth
              onChange={handleOnChangeUsername}
            />
            <TextField
              type='password'
              label={t('common.password.label')}
              placeholder={t('common.password.placeholder')}
              fullWidth
              onChange={handleOnChangePassword}
            />
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <SeamlessTransition
              transitionIndicator={isRegister}
              firstComp={
                <SubmitButtonForwardRef onClick={handleOnClickLogin}>{t('login.button.label')}</SubmitButtonForwardRef>
              }
              secondComp={
                <SubmitButtonForwardRef onClick={handleOnClickRegister}>
                  {t('register.button.label')}
                </SubmitButtonForwardRef>
              }
            />
          </Grid>
          <Links isRegister={isRegister} />
        </Grid>
      </CardContent>
      <CardContent sx={{ display: { xs: 'none', lg: 'block' }, width: '600px', alignSelf: 'center' }}>
        <Illustration height='100%' width='100%' />
      </CardContent>
    </Card>
  );
}
