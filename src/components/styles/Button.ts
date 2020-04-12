import styled from 'styled-components';

export interface StyledButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: any;
  bg?: 'dark';
  disabled?: boolean;
  ref?: React.MutableRefObject<HTMLButtonElement>;
}

export const StyledButton = styled.button<StyledButtonProps>`
  --bg: ${p =>
    p.bg && p.bg === 'dark' ? 'var(--color-bg-dark)' : 'var(--color-bg)'};
  --inset: ${p =>
    p.bg && p.bg === 'dark' ? 'var(--bs-inset-dark)' : 'var(--bs-inset)'};
  --raised: ${p =>
    p.bg && p.bg === 'dark' ? 'var(--bs-raised-dark)' : 'var(--bs-raised)'};
  align-items: center;
  background-color: transparent;
  border: var(--border-light);
  border-radius: 1000px;
  box-shadow: var(--raised);
  color: ${p =>
    p.primary && !p.disabled ? 'var(--color-primary)' : 'var(--text-muted)'};
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  justify-content: center;
  padding: 0 1.25rem;

  &.icon {
    fill: currentColor;
    padding: 0.5rem;

    svg {
      height: 100%;
      width: auto;
      pointer-events: none;
    }
  }

  :focus:not(:disabled) {
    color: ${p => (p.primary ? 'var(--color-primary)' : 'var(--text-muteder)')};
    border: var(--border);
  }

  :hover,
  :active {
    &:not(:disabled) {
      box-shadow: var(--raised), var(--inset);
      color: ${p =>
        p.primary && !p.disabled
          ? 'var(--color-primary)'
          : 'var(--text-muteder)'};
      cursor: pointer;
    }
  }
`;
