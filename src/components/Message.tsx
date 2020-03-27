import React from 'react';
import styled from 'styled-components';
// import ReactEmoji from 'react-emoji'; // no types
import { MessageType } from '../store/socket';

interface StyledProps {
  fromCurrentUser: boolean;
}

const StyledMessage = styled.div`
  display: flex;
  flex-direction: ${(p: StyledProps) =>
    p.fromCurrentUser ? 'row-reverse' : 'row'};
  --bg: ${(p: StyledProps) => (p.fromCurrentUser ? '#48f' : '#ddd')};

  .sent-by {
    font-weight: bold;
  }
  .message-text {
    margin: 0 1rem;
    background-color: var(--bg);
    border-radius: 0.5rem;
    padding: 1rem;

    p {
      margin: 0;
    }
  }
`;

interface Props {
  message: MessageType;
  name: string;
}

const Message: React.FC<Props> = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;

  return (
    <StyledMessage fromCurrentUser={isSentByCurrentUser}>
      <div className="sent-by">
        <p>{user}</p>
      </div>
      <div className="message-text">
        <p>{text}</p>
      </div>
    </StyledMessage>
  );
};

export default Message;
