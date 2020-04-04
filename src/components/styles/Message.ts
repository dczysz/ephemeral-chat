import styled from 'styled-components';

interface Props {
  fromCurrentUser: boolean;
}

export const StyledMessage = styled.div<Props>`
  --bg: ${p =>
    p.fromCurrentUser ? p.theme.colors.primary : p.theme.colors.bgLight};
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
    background-color: var(--bg);
    border-radius: 0.5rem;
    max-width: ${p => p.theme.bp.tablet};
    padding: 1rem;
    word-break: break-word;

    pre {
      margin: 0;
    }
  }
`;
