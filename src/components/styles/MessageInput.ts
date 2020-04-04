import styled from 'styled-components';

interface Props {
  expand: boolean;
}

export const StyledMessageInput = styled.form<Props>`
  align-items: center;
  background-color: ${p => p.theme.colors.bgDark};
  box-shadow: 0 -2px 6px ${p => p.theme.colors.bgDarker};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  p {
    color: ${p => p.theme.colors.textMuted};
    margin: 0;
    white-space: nowrap;
  }

  textarea {
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.bgLight};
    border: ${p => p.theme.colors.bgDarker};
    border-radius: ${p => p.theme.br};
    height: 100%;
    line-height: 1rem;
    margin-left: 1rem;
    max-height: ${p => (p.expand ? 'none' : '3.1rem')};
    overflow: ${p => (p.expand ? 'auto' : 'none')};
    padding: 1rem;
    resize: none;
    width: 100%;
  }
`;
