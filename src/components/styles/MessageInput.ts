import styled from 'styled-components';

interface Props {
  expand: boolean;
}

export const StyledMessageInput = styled.form<Props>`
  align-items: flex-start;
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
    margin-top: ${p => (p.expand ? '0' : '1rem')};
    white-space: nowrap;
  }

  .input {
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
    }

    .placeholder {
      bottom: 1rem;
      color: ${p => p.theme.colors.textMuted};
      left: 1rem;
      pointer-events: none;
      position: absolute;
      top: 1rem;
    }

    textarea {
      background-color: transparent;
      border: none;
      color: ${p => p.theme.colors.text};
      height: 100%;
      line-height: 1rem;
      max-height: ${p => (p.expand ? 'none' : '3rem')};
      overflow: ${p => (p.expand ? 'auto' : 'hidden')};
      padding: 1rem;
      resize: none;
      width: 100%;
    }

    button[type='submit'] {
      background-color: transparent;
      border: none;
      color: ${p => p.theme.colors.textMuted};
      padding: 1rem;

      :hover {
        color: ${p => p.theme.colors.text};
      }
    }
  }
`;
