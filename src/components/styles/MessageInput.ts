import styled from 'styled-components';

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
    border: 2px solid transparent;
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
      width: 2.5rem;
    }
  }
`;
