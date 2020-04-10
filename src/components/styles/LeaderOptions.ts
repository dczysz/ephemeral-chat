import styled from 'styled-components';

export const StyledLeaderOptions = styled.div`
  padding: 1rem;
  border-bottom: var(--border-light);

  .heading {
    margin: 0;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  form {
    align-items: center;
    display: flex;
    margin-top: 1rem;

    &.collapsed {
      button {
        width: 100%;
      }
    }
  }

  .input {
    margin-right: 1rem;
  }
`;
