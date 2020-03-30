import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

export const StyledErrorModal = styled.div`
  align-items: center;
  animation: ${animation} 0.2s;
  background-color: ${p => p.theme.bgDark}dd;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: all;
  position: absolute;
  right: 0;
  top: 0;

  > div {
    background-color: ${p => p.theme.bgLight};

    h1 {
      text-align: center;
    }
  }
`;
