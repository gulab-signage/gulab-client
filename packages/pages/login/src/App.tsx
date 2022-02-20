import '@emotion/react';
import { GlobalStyles, ThemeProvider } from '@gulab-client/core-ui';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ReactComponent as LogoB16 } from 'assets/logo.svg';
import Footer from 'comps/Footer';
import Login from 'Login';
import React from 'react';

// TODO: Create whitelabel system
const whitelabel = {
  companyName: 'Gulab Studio',
  logoDefault: LogoB16,
  copyright: '© 2022 Gulab Studio',
};

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <CssBaseline />
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{ minHeight: '100vh' }}
        >
          <Login />
          <Footer copyright={whitelabel.copyright} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
