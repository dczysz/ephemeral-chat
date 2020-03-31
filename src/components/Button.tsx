import React from 'react';

import { StyledButton, StyledButtonProps } from './styles';

interface Props extends StyledButtonProps {}

const Button: React.FC<Props> = ({ type = 'button', children, ...rest }) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
