import styled from '@emotion/styled';
import { LogoBlack } from '@gulab-client/core-ui/src/assets';
import Typography from '@mui/material/Typography';
import React from 'react';

type RootProps = {
  height: number;
};

const Root = styled.div<RootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height}px;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const CompanyName = styled(Typography)`
  vertical-align: middle;
  font-weight: 700;
  font-size: 2.4rem !important;
`;

const Logo = styled(LogoBlack)`
  height: 100%;
`;

type Props = {
  brandName: string;
  height: number;
};

export default function Header({ brandName, height }: Props) {
  return (
    <Root height={height}>
      <CompanyName display='inline' sx={{ typography: { xs: 'h5', sm: 'h4' }, fontWeight: { xs: 700, sm: 'h4' } }}>
        {brandName}
      </CompanyName>
      <Logo />
      <CompanyName display='inline' sx={{ typography: { xs: 'h5', sm: 'h4' }, fontWeight: { xs: 700, sm: 'h4' } }}>
        Studio
      </CompanyName>
    </Root>
  );
}
