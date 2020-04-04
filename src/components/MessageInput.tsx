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
      <p className="name">{name}</p>

      <div className="input">
        {!message.length && <p className="placeholder">type a message...</p>}
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={Math.min(6, message.split('\n').length)}
        />
        <button type="submit">></button>
      </div>
    </StyledMessageInput>
  );
};

export default MessageInput;
