import styled from 'styled-components';

export interface StyledButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border: 2px solid ${p => p.theme.colors.bgDark};
  border-radius: ${p => p.theme.br};
  box-shadow: ${p => p.theme.bs.raised};
  color: ${p => (p.primary ? p.theme.colors.primary : p.theme.colors.text)};
  cursor: pointer;
  font-weight: bold;
  padding: 1em;

  :hover,
  :focus,
  :active {
    box-shadow: ${p => p.theme.bs.raised}, ${p => p.theme.bs.inset};
  }
`;
