import React, { useEffect, useRef } from 'react';

import { StyledMessages } from './styles';
import Message from './Message';
import { MessageType, UserType } from '../store/socket';

interface Props {
  messages: MessageType[];
  currentUser: UserType;
}

const Messages: React.FC<Props> = ({ messages, currentUser }) => {
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
        <Message key={i} currentUser={currentUser} message={msg} />
      ))}
      <div ref={messagesEndRef} />
      {<div className="bottom-banner">{}</div>}
    </StyledMessages>
  );
};

export default Messages;
