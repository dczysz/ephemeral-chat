import styled from 'styled-components';

export interface StyledButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: any;
  bg?: 'dark' | 'darker';
  disabled?: boolean;
  ref?: React.MutableRefObject<HTMLButtonElement>;
}

export const StyledButton = styled.button<StyledButtonProps>`
  --bg: ${p =>
    p.bg && p.bg === 'dark'
      ? p.theme.colors.bgDark
      : p.bg && p.bg === 'darker'
      ? p.theme.colors.bgDarker
      : 'transparent'};
  background-color: var(--bg);
  border: 2px solid var(--bg);
  border-radius: 1000px;
  box-shadow: ${p => p.theme.bs.raised[p.bg ? p.bg : 'dark']};
  color: ${p =>
    p.primary && !p.disabled
      ? p.theme.colors.primary
      : p.theme.colors.textMuted};
  align-items: center;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  padding: 0 1.25rem;
  justify-content: center;

  &.icon {
    fill: currentColor;
    padding: 0.5rem;

    svg {
      height: 100%;
      width: auto;
    }
  }

  :hover,
  :focus,
  :active {
    &:not(:disabled) {
      box-shadow: ${p => p.theme.bs.raised[p.bg ? p.bg : 'dark']},
        ${p => p.theme.bs.inset[p.bg ? p.bg : 'dark']};
      cursor: pointer;
    }
  }
`;
