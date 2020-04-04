import styled from 'styled-components';

interface Props {
  expand: boolean;
}

export const StyledMessageInput = styled.form<Props>`
  align-items: ${p => (p.expand ? 'flex-start' : 'center')};
  background-color: ${p => p.theme.colors.bgDark};
  box-shadow: 0 -2px 6px ${p => p.theme.colors.bgDarker};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  p {
    margin: 0;
  }

  .name {
    color: ${p => p.theme.colors.textMuted};
    white-space: nowrap;
  }

  .input {
    --time: ${p => p.theme.time.long};
    align-items: ${p => (p.expand ? 'flex-end' : 'center')};
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: ${p => p.theme.br};
    box-shadow: ${p => p.theme.bs.raised};
    display: flex;
    margin-left: 1rem;
    position: relative;
    width: 100%;
    transition: box-shadow ${p => p.theme.time.short};

    :focus-within {
      box-shadow: ${p => p.theme.bs.raised}, ${p => p.theme.bs.inset};

      button[type='submit'] {
        box-shadow: ${p => p.theme.bs.raised};
        color: ${p => p.theme.colors.textMuted};
        pointer-events: all;
        transition: box-shadow var(--time), color var(--time);

        :hover,
        :active,
        :focus {
          box-shadow: ${p => p.theme.bs.raised}, ${p => p.theme.bs.inset};
        }
      }
    }

    .placeholder {
      color: ${p => p.theme.colors.textMuted};
      left: calc(1rem + 1px);
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    textarea {
      background-color: transparent;
      border: none;
      color: ${p => p.theme.colors.text};
      height: 100%;
      line-height: 1.2rem;
      max-height: ${p => (p.expand ? 'none' : '3.2rem')};
      overflow: ${p => (p.expand ? 'auto' : 'hidden')};
      padding: 1rem;
      resize: none;
      width: 100%;
    }

    button[type='submit'] {
      align-items: center;
      background-color: transparent;
      border: 2px solid transparent;
      border-radius: 1000px;
      color: transparent;
      cursor: pointer;
      display: flex;
      justify-content: center;
      margin-bottom: ${p => (p.expand ? '0.5rem' : 0)};
      margin-right: 0.5rem;
      height: 2rem;
      width: 2rem;
      pointer-events: none;
      transition: box-shadow var(--time), color var(--time);

      svg {
        height: 0.9rem;
        width: 0.9rem;
      }
    }
  }
`;
