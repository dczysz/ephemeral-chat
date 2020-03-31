import React from 'react';

import { StyledMessageInput } from './styles';
import Input from './Input';

interface Props {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
}

const MessageInput: React.FC<Props> = ({
  message,
  setMessage,
  sendMessage,
  name,
}) => {
  return (
    <StyledMessageInput onSubmit={sendMessage}>
      <p>{name}</p>
      <Input
        placeholder="type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </StyledMessageInput>
  );
};

export default MessageInput;
