import React from 'react';
import { MessageType } from '../store/socket';

import { StyledMessage } from './styles';

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
