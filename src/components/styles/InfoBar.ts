import styled from 'styled-components';

export const StyledInfoBar = styled.div`
  background-color: #48f;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: inherit;
  }

  h3 {
    margin: 0;
  }

  .left {
    display: flex;
    align-items: center;

    ::before {
      content: '';
      display: inline-block;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background-color: ${p => p.theme.success};
      margin: 1rem;
    }
  }

  .right {
    .show-users {
      @media screen and (min-width: ${p => p.theme.bpLaptop}) {
        display: none;
      }
    }
  }
`;
