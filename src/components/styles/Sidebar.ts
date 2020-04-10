import styled from 'styled-components';

export const StyledSidebar = styled.div`
  border-left: var(--border-light);
  color: var(--sidebar-text-muted);
  height: 100%;
  max-width: 90vw;
  width: 18rem;

  .buttons {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
    padding: 0 1rem;
    padding-bottom: 0.5rem;

    button {
      margin-top: 1rem;
      margin-left: 1rem;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }
`;
