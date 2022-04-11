import styled from '@emotion/styled';
import { useTranslation } from '@gulab-client/core-ui';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TranslateIcon from '@mui/icons-material/Translate';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// TODO: Transfer to common place
const languages: Record<string, string> = {
  'en-GB': 'English',
  'mk-MK': 'Македонски',
  'ko-KR': '한국어',
  'zh-CN': '汉语',
  'zh-HK': '廣東話',
};

const Root = styled.div``;

type ItemsProps = {
  height: number;
};

const Items = styled.div<ItemsProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: ${({ height }) => height}px;
  margin: ${({ theme }) => theme.spacing(0, 6)};
  background-color: #ffffff;
`;

const ButtonStyled = styled(Button)`
  min-width: 36px;
`;

type Props = {
  availableLanguages: string[];
  height: number;
};

export default function BottomBar({ availableLanguages, height }: Props) {
  const languagesButtonRef = useRef(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [numberOfNotifications, setNumberOfNotifications] = useState(0);
  const { t } = useTranslation('common', { keyPrefix: 'sidebar.bottomBar' });
  const tooltipLanguage = t('tooltips.language');
  const tooltipLogout = t('tooltips.logout');
  const tooltipNotifications = t('tooltips.notifications');

  useEffect(() => {
    // TODO: Fetch number of notifications
    setNumberOfNotifications(3);
  }, []);

  const handleOnClickLogout = useCallback(() => {
    // TODO: Handle logout
  }, []);

  const handleOnClickNotifications = useCallback(() => {
    // TODO: Navigate to notifications
  }, []);

  const handleOnLanguageMenuOpen = useCallback(() => {
    setLanguageMenuOpen(true);
  }, []);

  const handleOnLanguageMenuClose = useCallback(() => {
    setLanguageMenuOpen(false);
  }, []);

  const handleOnSelectLanguage = useCallback((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    // TODO: Language change
    console.warn('selected language', event.currentTarget.dataset.language);
    setLanguageMenuOpen(false);
  }, []);

  return (
    <Root>
      <Divider variant='middle' />
      <Items height={height}>
        <Tooltip arrow title={tooltipLanguage} placement='top'>
          <ButtonStyled ref={languagesButtonRef} variant='outlined' size='small' onClick={handleOnLanguageMenuOpen}>
            <TranslateIcon fontSize='small' />
          </ButtonStyled>
        </Tooltip>
        <Tooltip arrow title={tooltipNotifications} placement='top' onClick={handleOnClickNotifications}>
          <Badge badgeContent={numberOfNotifications} color='secondary' overlap='circular'>
            <ButtonStyled variant='outlined' size='small'>
              <NotificationsIcon fontSize='small' />
            </ButtonStyled>
          </Badge>
        </Tooltip>
        <Tooltip arrow title={tooltipLogout} placement='top'>
          <ButtonStyled variant='outlined' size='small' onClick={handleOnClickLogout}>
            <LogoutIcon fontSize='small' />
          </ButtonStyled>
        </Tooltip>
      </Items>
      <Menu anchorEl={languagesButtonRef.current} open={languageMenuOpen} onClose={handleOnLanguageMenuClose}>
        {availableLanguages.map((language) => (
          <MenuItem key={language} data-language={language} onClick={handleOnSelectLanguage}>
            {languages[language]}
          </MenuItem>
        ))}
      </Menu>
    </Root>
  );
}
