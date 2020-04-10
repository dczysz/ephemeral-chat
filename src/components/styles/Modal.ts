import styled, { keyframes } from 'styled-components';
import { baseTheme } from './theme';

const animation = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

export const StyledModal = styled.div`
  align-items: flex-start;
  animation: ${animation} var(--time-long);
  background-color: var(--color-bg);
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
    border: var(--border);
    border-radius: var(--br);
    color: var(--text);
    max-width: var(--bp-tablet);
    padding: 1.5rem;
    width: 100%;

    h1 {
      margin-top: 0;
      text-align: center;
    }
  }

  @media (min-width: ${baseTheme.bp.laptop}) {
    align-items: center;
  }
`;
