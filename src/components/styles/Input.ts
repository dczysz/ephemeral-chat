import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${p => p.theme.colors.bgLight};
  border: ${p => p.theme.colors.bgDarker};
  border-radius: ${p => p.theme.br};
  padding: 1rem;
  color: ${p => p.theme.colors.text};
  width: 100%;
`;
