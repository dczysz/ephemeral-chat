import styled from 'styled-components';

export const StyledUserList = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid ${p => p.theme.bgDark};
    }
  }
`;
