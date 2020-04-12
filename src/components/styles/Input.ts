import styled from 'styled-components';

export interface StyledInputProps {
  bg?: 'dark';
  type?: 'text' | 'password';
  className?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
  --bg: ${p =>
    p.bg && p.bg === 'dark' ? 'var(--color-bg-dark)' : 'var(--color-bg)'};
  background-color: transparent;
  border: var(--border-light);
  border-radius: 1000px;
  box-shadow: ${p =>
    p.bg && p.bg === 'dark' ? 'var(--bs-raised-dark)' : 'var(--bs-raised)'};
  color: var(--text);
  font-size: 1rem;
  min-width: 4rem;
  padding: 0 1.25rem;
  height: 3rem;
  width: 100%;

  ::placeholder {
    color: var(--text-muted);
  }

  :focus {
    border: var(--border);
    box-shadow: ${p => (p.bg ? 'var(--bs-raised-dark)' : 'var(--bs-raised)')},
      ${p => (p.bg ? 'var(--bs-inset-dark)' : 'var(--bs-inset)')};
  }
`;
