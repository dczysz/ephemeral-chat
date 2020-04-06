import styled from 'styled-components';

interface Props {
  expand: boolean;
}

export const StyledMessageInput = styled.form<Props>`
  align-items: ${p => (p.expand ? 'flex-start' : 'center')};
  background-color: ${p => p.theme.colors.bgDark};
  box-shadow: 0 -2px 6px ${p => p.theme.colors.bgDarker};
  display: flex;
  justify-content: center;
  padding: 1rem;

  .input {
    --time: ${p => p.theme.time.long};
    align-items: ${p => (p.expand ? 'flex-end' : 'center')};
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 1.7rem;
    box-shadow: ${p => p.theme.bs.raised.dark};
    display: flex;
    max-width: ${p => p.theme.bp.laptop};
    padding-left: 0.5rem;
    position: relative;
    transition: box-shadow ${p => p.theme.time.short};
    width: 100%;

    :focus-within {
      box-shadow: ${p => p.theme.bs.raised.dark}, ${p => p.theme.bs.inset.dark};
    }

    :not(:focus-within) {
      button {
        box-shadow: none;
      }
    }

    .placeholder {
      color: ${p => p.theme.colors.textMuted};
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
      color: ${p => p.theme.colors.text};
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
