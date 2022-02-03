import styled from '@emotion/styled';
import { useTranslation } from '@gulab-client/core-ui';
import { Logger } from '@gulab-client/logger';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import type { PropsWithChildren } from 'react';
import React, { useMemo, useRef, useState } from 'react';
import copyTextToClipboard from './utils/copyTextToClipboard';
import selectTextFromNode from './utils/selectTextFromNode';

type RootProps = {
  block?: boolean;
};

const Root = styled.div<RootProps>`
  display: ${({ block }) => (block ? 'block' : 'inline')};
  cursor: pointer;
`;

export type Props = PropsWithChildren<{
  block?: boolean;
  id?: string;
}>;

/**
 * Copy to clipboard the value of the children. Children should be of type string.
 */
export default function Text({ children, block, id }: Props) {
  const { t } = useTranslation('common', { keyPrefix: 'copyToClipboard' });
  const rootRef = useRef<HTMLDivElement>(null);
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
        if (rootRef.current) {
          selectTextFromNode(rootRef.current);
        }

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
        ref={rootRef}
        id={id}
        role='button'
        block={block}
        data-test={`${id ?? 'root'}-ctc-text`}
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

Text.propTypes = {
  block: PropTypes.bool,
  id: PropTypes.string,
};

Text.defaultProps = {
  block: false,
  id: undefined,
};
