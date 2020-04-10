import styled from 'styled-components';
import { ThemeModeType } from '../../store/ThemeToggleContext';

interface Props {
  fromCurrentUser: boolean;
  themeMode: ThemeModeType;
}

export const StyledMessage = styled.div<Props>`
  align-items: ${p => (p.fromCurrentUser ? 'flex-end' : 'flex-start')};
  align-self: ${p => (p.fromCurrentUser ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: column;
  max-width: 90%;
  padding: 1rem;

  .sent-by {
    font-weight: bold;

    p {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }
  .message-text {
    background-color: ${p =>
      p.themeMode === 'light'
        ? 'var(--color-bg-dark)'
        : 'var(--color-bg-light)'};
    border-radius: var(--br);
    box-shadow: var(--bs-grooved-primary);
    color: var(--text);
    max-width: 100%;
    padding: 1rem;

    pre {
      margin: 0;
      max-width: var(--bp-tablet);
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
`;
