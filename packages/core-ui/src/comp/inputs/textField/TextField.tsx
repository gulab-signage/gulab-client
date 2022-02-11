import styled from '@emotion/styled';
import type { TextFieldProps } from '@mui/material';
import MuiInputLabel from '@mui/material/InputLabel';
import { styled as muiStyled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';
import React from 'react';

export type { TextFieldProps as Props };

const Root = styled.div`
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

const CustomizedInputLabel = muiStyled(MuiInputLabel)`
  margin-left: ${({ theme }) => theme.spacing(1)};
  font-weight: 600;
`;

const CustomizedTextField = muiStyled(MuiTextField)`
  & .MuiFormHelperText-root {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;

export default function TextField({
  disabled,
  error,
  id,
  inputProps,
  label,
  required,
  InputLabelProps,
  ...otherProps
}: TextFieldProps) {
  const labelId = id ? `${id}-label` : undefined;
  const labelTestId = labelId ?? 'text-field-label';
  return (
    <Root>
      {label && (
        <CustomizedInputLabel
          disabled={disabled}
          error={error}
          id={labelId}
          required={required}
          shrink
          data-test={labelTestId}
          {...InputLabelProps}
        >
          {label}
        </CustomizedInputLabel>
      )}
      <CustomizedTextField
        disabled={disabled}
        error={error}
        id={id}
        required={required}
        inputProps={{
          ...inputProps,
          'data-test': `${id ?? 'text'}-field`,
        }}
        {...otherProps}
      />
    </Root>
  );
}
