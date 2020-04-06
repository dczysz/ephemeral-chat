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
  padding: 0 1.25rem;
  height: 3rem;
  width: 100%;

  ::placeholder {
    color: ${p => p.theme.colors.textMuted};
  }

  :focus {
    box-shadow: ${p => p.theme.bs.raised[p.bg ? p.bg : 'dark']},
      ${p => p.theme.bs.inset[p.bg ? p.bg : 'dark']};
  }
`;
