import styled from 'styled-components';

export const StyledJoin = styled.div`
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;

    label {
      span {
        color: ${p => p.theme.colors.textMuted};
        display: inline-block;
        margin: 0 0 0.5rem 0.5rem;
      }

      input {
        margin-bottom: 1rem;

        ::placeholder {
          color: ${p => p.theme.colors.text};
        }
      }
    }

    button {
      margin-left: auto;
    }
  }
`;
