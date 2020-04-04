import React, { useRef } from 'react';
import { MdSend } from 'react-icons/md';

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
  const inputRef = useRef<HTMLTextAreaElement>(null!);

  // Handle multiline input
  // Normal Enter key on mobile adds line
  // Shift + Enter if not on mobile adds line
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (e.key === 'Enter' && !e.shiftKey && !isMobile) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    sendMessage(e);
    inputRef.current && inputRef.current.focus();
  };

  return (
    <StyledMessageInput
      onSubmit={handleSubmit}
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
          ref={inputRef}
        />
        <button type="submit" aria-label="Send Message">
          <MdSend />
        </button>
      </div>
    </StyledMessageInput>
  );
};

export default MessageInput;
