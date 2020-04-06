import styled from 'styled-components';

export interface StyledInputProps {
  bg?: 'dark' | 'darker';
  type?: 'text' | 'password';
  className?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
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
  color: ${p => p.theme.colors.text};
  font-size: 1rem;
  min-width: 6rem;
  padding: 1em 1.5em;
  width: 100%;

  :focus {
    box-shadow: ${p => p.theme.bs.raised[p.bg ? p.bg : 'dark']},
      ${p => p.theme.bs.inset[p.bg ? p.bg : 'dark']};
  }
`;
