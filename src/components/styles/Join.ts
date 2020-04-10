import styled from 'styled-components';

export const StyledJoin = styled.div`
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;

    label {
      span {
        color: var(--text-muted);
        display: inline-block;
        margin: 0 0 0.5rem 0.5rem;
      }

      .input {
        margin-bottom: 1rem;

        input {
          ::placeholder {
            color: var(--text);
          }
        }
      }
    }

    button {
      margin-left: auto;
    }
  }
`;
