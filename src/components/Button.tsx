import React from 'react';

import { StyledButton, StyledButtonProps } from './styles';

interface Props extends StyledButtonProps {
  icon?: boolean;
  tabIndex?: number;
}

const Button: React.FC<Props> = ({
  type = 'button',
  icon,
  className = '',
  children,
  ...rest
}) => {
  const classes = className + (icon ? ' icon' : '');

  return (
    <StyledButton type={type} className={classes} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
