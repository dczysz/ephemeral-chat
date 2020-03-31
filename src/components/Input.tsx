import React from 'react';

import { StyledInput } from './styles';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.SFC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
      />
    </>
  );
};

export default Input;
