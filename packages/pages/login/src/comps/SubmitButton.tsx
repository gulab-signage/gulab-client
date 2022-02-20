import type { SeamlessTransitionChildProps } from '@gulab-client/core-ui';
import Button from '@mui/material/Button';
import React from 'react';

type Props = Partial<SeamlessTransitionChildProps> & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function SubmitButton(
  { st, style, onClick, children }: React.PropsWithChildren<Props>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <Button ref={ref} style={style} variant='contained' fullWidth onClick={onClick} data-st={st}>
      {children}
    </Button>
  );
}

const SubmitButtonForwardRef = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<Props>>(SubmitButton);

export default SubmitButtonForwardRef;
