import React, { useEffect, useRef } from 'react';

import { StyledMessages } from './styles';
import Message from './Message';
import { MessageType } from '../store/socket';

interface Props {
  messages: MessageType[];
  name: string;
}

const Messages: React.FC<Props> = ({ messages, name }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null!);

  // Scroll to bottom on new message
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      //TODO: show 'new messages' banner if not already at bottom
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledMessages>
      {messages.map((msg, i) => (
        <Message key={i} name={name} message={msg} />
      ))}
      <div ref={messagesEndRef} />
      {<div className="bottom-banner">{}</div>}
    </StyledMessages>
  );
};

export default Messages;
