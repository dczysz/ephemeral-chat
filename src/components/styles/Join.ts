import styled from 'styled-components';

export const StyledJoin = styled.div`
  align-items: top;
  background-color: ${p => p.theme.colors.bgDark};
  display: flex;
  height: 100vh;
  justify-content: center;
  color: ${p => p.theme.colors.text};
  padding: 1rem;

  .modal {
    background-color: ${p => p.theme.colors.bg};
    border-radius: ${p => p.theme.br};
    margin-bottom: auto;
    max-width: ${p => p.theme.bp.tablet};
    padding: 1.5rem;
    width: 100%;

    h1 {
      margin-top: 0;
      text-align: center;
    }

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
  }

  @media screen and (min-width: ${p => p.theme.bp.laptop}) {
    align-items: center;

    .modal {
      margin: 0;
    }
  }
`;
