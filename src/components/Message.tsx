import React, { useContext } from 'react';
import { MessageType, UserType } from '../store/socket';

import { StyledMessage } from './styles';
import ThemeToggleContext from '../store/ThemeToggleContext';

interface Props {
  message: MessageType;
  currentUser: UserType;
}

const Message: React.FC<Props> = ({ message: { user, text }, currentUser }) => {
  const { themeMode } = useContext(ThemeToggleContext);

  const isSentByCurrentUser =
    currentUser.name === user.name && user.num && currentUser.num === user.num
      ? true
      : false;

  // Only apply #num if not admin
  const messageFromName = user.name + (user.num ? `#${user.num}` : '');

  return (
    <StyledMessage fromCurrentUser={isSentByCurrentUser} themeMode={themeMode}>
      <div className="sent-by">
        <p>{messageFromName}</p>
      </div>
      <div className="message-text">
        <pre>{text}</pre>
      </div>
    </StyledMessage>
  );
};

export default Message;
