import styled from 'styled-components';

export const StyledMessageInput = styled.form`
  align-items: center;
  box-shadow: 0 -2px 6px ${p => p.theme.colors.bgDarker};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  p {
    margin: 0;
  }

  input[type='text'] {
    margin-left: 1rem;
  }
`;
