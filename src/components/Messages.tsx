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
        <div key={i}>
          <Message name={name} message={msg} />
        </div>
      ))}
    </StyledMessages>
  );
};

export default Messages;
