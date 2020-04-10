import styled from 'styled-components';

export const StyledUserList = styled.div`
  padding: 1rem;

  h3 {
    margin: 0;
  }

  ul {
    color: var(--sidebar-text-muted);
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 1rem 0;

      &.current-user {
        color: var(--sidebar-text);
        font-weight: bold;
      }

      ::before {
        background-color: var(--color-success);
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 0.8rem;
        margin-right: 1rem;
        width: 0.8rem;
      }
    }
  }
`;
