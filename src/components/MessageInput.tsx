import React, { useRef } from 'react';
import { MdSend } from 'react-icons/md';

import { StyledMessageInput } from './styles';
import Button from './Button';

interface Props {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e?: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const MessageInput: React.FC<Props> = ({
  message,
  setMessage,
  sendMessage,
  loading,
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
      <div className="input">
        {!message.length && <p className="placeholder">type a message...</p>}
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={Math.min(3, message.split('\n').length)}
          ref={inputRef}
          disabled={loading}
        />
        <Button
          type="submit"
          primary
          disabled={message.length < 1 || loading}
          aria-label="send message"
          icon
          className={loading ? 'loading' : ''}
        >
          <MdSend />
        </Button>
      </div>
    </StyledMessageInput>
  );
};

export default MessageInput;
