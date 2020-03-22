import React from 'react';
import styled from 'styled-components';

import Message from './Message';
import { MessageType } from '../store/socket';

const StyledMessages = styled.div``;

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
