import React from 'react';

import { StyledInput, StyledInputProps } from './styles';

interface Props extends StyledInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  ref?: React.MutableRefObject<HTMLInputElement>;
  type?: 'text' | 'password';
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  maxLength,
  type = 'text',
  ...rest
}) => {
  return (
    <>
      <StyledInput
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder || ''}
        maxLength={maxLength || 30000}
        {...rest}
      />
    </>
  );
};

export default Input;
