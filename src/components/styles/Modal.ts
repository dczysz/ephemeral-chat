import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

export const StyledModal = styled.div`
  align-items: flex-start;
  animation: ${animation} ${p => p.theme.time.long};
  background-color: ${p => p.theme.colors.bgDarker};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1rem;
  pointer-events: all;
  position: absolute;
  right: 0;
  top: 0;

  .modal {
    background-color: ${p => p.theme.colors.bgDark};
    border-radius: ${p => p.theme.br};
    color: ${p => p.theme.colors.text};
    max-width: ${p => p.theme.bp.tablet};
    padding: 1.5rem;
    width: 100%;

    h1 {
      margin-top: 0;
      text-align: center;
    }
  }

  @media screen and (min-width: ${p => p.theme.bp.laptop}) {
    align-items: center;
  }
`;
