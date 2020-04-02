import React from 'react';

import { StyledMessages } from './styles';
import Message from './Message';
import { MessageType } from '../store/socket';

interface Props {
  messages: MessageType[];
  name: string;
}

const Messages: React.FC<Props> = ({ messages, name }) => {
  return (
    <StyledMessages>
      {messages.map((msg, i) => (
        <Message key={i} name={name} message={msg} />
      ))}
    </StyledMessages>
  );
};

export default Messages;
