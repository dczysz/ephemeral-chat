import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

export const StyledErrorModal = styled.div`
  align-items: center;
  animation: ${animation} ${p => p.theme.time.long};
  background-color: ${p => p.theme.colors.bgDark}dd;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: all;
  position: absolute;
  right: 0;
  top: 0;

  > div {
    background-color: ${p => p.theme.colors.bg};
    border-radius: ${p => p.theme.br};
    padding: 1rem;

    h1 {
      margin-top: 0;
      text-align: center;
    }
  }
`;
