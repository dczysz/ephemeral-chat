import styled from 'styled-components';

export interface StyledButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  primary?: boolean;
  danger?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${p =>
    p.primary ? p.theme.colors.primary : 'transparent'};
  border: 2px solid
    ${p =>
      p.primary
        ? p.theme.colors.primary
        : p.danger
        ? p.theme.colors.danger
        : p.theme.colors.bgLight};
  border-radius: ${p => p.theme.br};
  color: ${p => (p.danger ? p.theme.colors.danger : p.theme.colors.text)};
  cursor: pointer;
  padding: 1em;
  transition: all 0.2s;

  :hover {
    background-color: ${p =>
      p.primary
        ? p.theme.colors.primary
        : p.danger
        ? p.theme.colors.danger
        : p.theme.colors.bgLight};
    color: ${p => (p.danger ? p.theme.colors.bgDark : 'currentColor')};
    transform: ${p => (p.primary ? 'translateY(2px)' : 'none')};
  }
`;
