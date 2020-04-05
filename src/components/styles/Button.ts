import styled from 'styled-components';

export interface StyledButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: any;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border: 2px solid ${p => p.theme.colors.bgDark};
  border-radius: ${p => p.theme.br};
  box-shadow: ${p => p.theme.bs.raised};
  color: ${p =>
    p.primary ? p.theme.colors.primary : p.theme.colors.textMuted};
  cursor: pointer;
  font-weight: bold;
  padding: 1em;

  &.icon {
    align-items: center;
    fill: currentColor;
    display: flex;
    justify-content: center;
    padding: 0;

    svg {
      height: 1rem;
      margin: 1em;
      width: 1rem;
    }
  }

  :hover,
  :focus,
  :active {
    box-shadow: ${p => p.theme.bs.raised}, ${p => p.theme.bs.inset};
  }
`;
