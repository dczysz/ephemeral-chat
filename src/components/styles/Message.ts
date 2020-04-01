import styled from 'styled-components';

interface Props {
  fromCurrentUser: boolean;
}

export const StyledMessage = styled.div<Props>`
  --bg: ${p =>
    p.fromCurrentUser ? p.theme.colors.primary : p.theme.colors.bgLight};
  display: flex;
  flex-direction: ${p => (p.fromCurrentUser ? 'row-reverse' : 'row')};
  margin: 1rem;

  .sent-by {
    font-weight: bold;
  }
  .message-text {
    background-color: var(--bg);
    border-radius: 0.5rem;
    margin: 0 1rem;
    max-width: ${p => p.theme.bp.tablet};
    padding: 1rem;
    word-break: break-word;

    p {
      margin: 0;
    }
  }
`;
