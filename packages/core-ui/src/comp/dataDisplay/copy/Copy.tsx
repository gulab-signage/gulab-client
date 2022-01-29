import styled from '@emotion/styled';
import { useTranslation } from '@gulab-client/core-ui';
import { Logger } from '@gulab-client/logger';
import Tooltip from '@mui/material/Tooltip';
import React, { PropsWithChildren, useMemo, useState } from 'react';
import copyTextToClipboard from './copyTextToClipboard';

type RootProps = {
  block?: boolean;
};

const Root = styled.div<RootProps>`
  display: ${({ block }) => (block ? 'block' : 'inline')};
`;

type Props = {
  block?: boolean;
};

const defaultProps = {
  block: false,
};

/**
 * Copy to clipboard the value of the children. Children should be of type string.
 */
export default function Copy({ children, block }: PropsWithChildren<Props>) {
  const { t } = useTranslation('common', { keyPrefix: 'copy' });
  const [copyExecuted, setCopyExecuted] = useState(false);
  const [copySuccess, setCopySuccess] = useState<boolean | undefined>(undefined);
  const title = useMemo(() => {
    if (copySuccess === true) return t('success');
    if (copySuccess === false) return t('error');
    return t('default', { value: children });
  }, [children, copySuccess, t]);

  function handleOnClick(e: React.BaseSyntheticEvent) {
    e.preventDefault();

    try {
      if (!copyExecuted) {
        copyTextToClipboard(children as string)
          .then(() => {
            setCopySuccess(true);
          })
          .catch(() => {
            setCopySuccess(false);
          });
      }
    } catch (error) {
      Logger.logError(error as Error);
      setCopySuccess(false);
    } finally {
      setCopyExecuted(true);
    }
  }

  function handleOnPressEnter(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      handleOnClick(e);
    }
  }

  function handleOnMouseOut() {
    if (copyExecuted) {
      setTimeout(() => {
        setCopyExecuted(false);
        setCopySuccess(undefined);
      }, 200);
    }
  }

  return (
    <Tooltip title={title} placement='top'>
      <Root
        role='button'
        block={block}
        onClick={handleOnClick}
        onMouseOut={handleOnMouseOut}
        onBlur={handleOnMouseOut}
        onKeyPress={handleOnPressEnter}
      >
        {children}
      </Root>
    </Tooltip>
  );
}

Copy.defaultProps = defaultProps;
