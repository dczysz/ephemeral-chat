import styled, { keyframes } from 'styled-components';

const sendingAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  10% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  49% {
    transform: translate3d(200%, 0, 0);
    opacity: 0;
  }
  50% {
    transform: translate3d(-200%, 0, 0);
    opacity: 0;
  }
  90% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

interface Props {
  expand: boolean;
}

export const StyledMessageInput = styled.form<Props>`
  align-items: ${p => (p.expand ? 'flex-start' : 'center')};
  border-top: var(--border);
  display: flex;
  justify-content: center;
  padding: 1rem;

  .input {
    align-items: ${p => (p.expand ? 'flex-end' : 'center')};
    border: var(--border-light);
    border-radius: 1.7rem;
    box-shadow: var(--bs-raised);
    display: flex;
    max-width: var(--bp-laptop);
    padding-left: 0.5rem;
    position: relative;
    transition: box-shadow var(--time-short), border var(--time-short);
    width: 100%;

    :focus-within {
      border: var(--border);
      box-shadow: var(--bs-raised), var(--bs-inset);
    }

    :not(:focus-within) {
      button {
        box-shadow: none;
      }
    }

    .placeholder {
      color: var(--text-muteder);
      left: calc(1.5rem + 1px);
      margin: 0;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    textarea {
      background-color: transparent;
      border: none;
      color: var(--text);
      font-size: 1rem;
      height: 100%;
      line-height: 1.2rem;
      max-height: ${p => (p.expand ? 'none' : '3.2rem')};
      overflow: ${p => (p.expand ? 'auto' : 'hidden')};
      padding: 1rem;
      resize: none;
      width: 100%;
    }

    button {
      height: 2.5rem;
      margin-right: 0.35rem;
      margin-bottom: ${p => (p.expand ? '0.35rem' : '')};
      min-width: 2.5rem;
      width: 2.5rem;

      &.loading svg {
        animation: ${sendingAnimation} 2s infinite;
      }
    }
  }
`;
