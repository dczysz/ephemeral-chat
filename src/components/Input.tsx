import React from 'react';

import { StyledInput } from './styles';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  maxLength,
}) => {
  return (
    <>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
        maxLength={maxLength || 30000}
      />
    </>
  );
};

export default Input;
