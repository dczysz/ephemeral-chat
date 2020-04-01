import styled from 'styled-components';

export const StyledUserList = styled.div`
  ul {
    color: ${p => p.theme.colors.textMuted};
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 1rem;

      &.current-user {
        color: ${p => p.theme.colors.text};
        font-weight: bold;
      }

      ::before {
        background-color: ${p => p.theme.colors.success};
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
