import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: inherit;
  border: 2px solid ${p => p.theme.colors.bgDark};
  border-radius: ${p => p.theme.br};
  padding: 1rem;
  color: ${p => p.theme.colors.text};
  width: 100%;
  box-shadow: ${p => p.theme.bs.raised};

  :focus {
    box-shadow: ${p => p.theme.bs.raised}, ${p => p.theme.bs.inset};
  }
`;
