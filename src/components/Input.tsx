import React from 'react';

import { StyledInput } from './styles';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  className?: string;
  ref?: React.MutableRefObject<HTMLInputElement>;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  maxLength,
  type = 'text',
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
      />
    </>
  );
};

export default Input;
