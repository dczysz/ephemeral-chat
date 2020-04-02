import styled from 'styled-components';

export const StyledMessageInput = styled.form`
  align-items: center;
  background-color: ${p => p.theme.colors.bgDark};
  box-shadow: 0 -2px 6px ${p => p.theme.colors.bgDarker};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  p {
    color: ${p => p.theme.colors.textMuted};
    margin: 0;
    white-space: nowrap;
  }

  input[type='text'] {
    margin-left: 1rem;
  }
`;
