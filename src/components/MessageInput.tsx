import React from 'react';

import { StyledMessageInput } from './styles';

interface Props {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e?: React.FormEvent<HTMLFormElement>) => void;
  name: string;
}

const MessageInput: React.FC<Props> = ({
  message,
  setMessage,
  sendMessage,
  name,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <StyledMessageInput
      onSubmit={sendMessage}
      expand={message.indexOf('\n') >= 0}
    >
      <p>{name}</p>

      <textarea
        placeholder="type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={Math.min(6, message.split('\n').length)}
      />
    </StyledMessageInput>
  );
};

export default MessageInput;
