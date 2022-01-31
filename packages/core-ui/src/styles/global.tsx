import { css, Global } from '@emotion/react';
import React from 'react';

const globalStyles = css`
  html {
    font-size: 62.5%;

    body {
      margin: 0;
    }
  }
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
