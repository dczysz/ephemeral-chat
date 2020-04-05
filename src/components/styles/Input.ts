import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: inherit;
  border: 2px solid ${p => p.theme.colors.bgDark};
  border-radius: ${p => p.theme.br};
  box-shadow: ${p => p.theme.bs.raised};
  color: ${p => p.theme.colors.text};
  min-width: 6rem;
  padding: 1em;
  width: 100%;

  :focus {
    box-shadow: ${p => p.theme.bs.raised}, ${p => p.theme.bs.inset};
  }
`;
