import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { RouteComponentProps, StaticContext } from 'react-router';

import { StyeldChat } from './styles';
import {
  ENDPOINT,
  UserType,
  JoinRoomResponseType,
  MessageType,
  RoomDataType,
} from '../store/socket';
import InfoBar from './InfoBar';
import MessageInput from './MessageInput';
import Messages from './Messages';
import Sidebar from './Sidebar';
import ErrorModal from './ErrorModal';
import UserList from './UserList';
import useClickOutside from '../hooks/useClickOutside';

let socket: SocketIOClient.Socket;

interface MatchParams {
  room: string;
}

interface HistoryState {
  error?: string;
  name?: string;
}

const Chat: React.FC<RouteComponentProps<
  MatchParams,
  StaticContext,
  HistoryState
>> = ({ history, match }) => {
  const [user, setUser] = useState<UserType>({ name: '', room: '' });
  const [users, setUsers] = useState<UserType[]>([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [errorStr, setErrorStr] = useState<string | null>(null);
  const sidebarRef = useRef(null!);

  useClickOutside(sidebarRef, () =>
    showSidebar ? setShowSidebar(false) : null
  );

  // Connect socket to server
  useEffect(() => {
    const { room } = match.params;
    let name =
      history.location.state && history.location.state.name
        ? history.location.state.name
        : '';

    // Fix back button not closing socket
    //TODO: Still not actually disconnecting
    if (socket) {
      console.log('Existing socket found, disconnecting before rejoining');
      socket.emit('disconnect');
      socket.close();
    }

    socket = io(ENDPOINT);

    socket.emit(
      'join',
      { name, room },
      ({ user, error }: JoinRoomResponseType) => {
        if (error) setErrorStr(error);
        if (user) setUser(user);
      }
    );

    return () => {
      socket.off('join');
      socket.emit('disconnect');
    };
  }, [match.params, history.location.state]);

  useEffect(() => {
    socket.on('message', (message: MessageType) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }: RoomDataType) => {
      setUsers(users);
    });

    return () => {
      socket.off('message');
      socket.off('roomData');
      socket.emit('disconnect');
    };
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket) {
      if (message) {
        socket.emit('sendMessage', message, (error: string) => {
          setMessage('');
          if (error) setErrorStr(error);
        });
      }
    } else {
      setErrorStr('Connection to server lost');
    }
  };

  const exitToHome = () => {
    socket.off('join');
    socket.off('message');
    socket.off('roomData');
    socket.emit('disconnect');
    socket.close();
    history.push('/', { error: errorStr || 'Unknown error' });
  };

  return (
    <StyeldChat showSidebar={showSidebar}>
      {errorStr ? (
        <ErrorModal error={errorStr} onClick={exitToHome} />
      ) : (
        <>
          <div className="sidebar" ref={sidebarRef}>
            <Sidebar>
              <UserList users={users} name={user.name} />
            </Sidebar>
          </div>
          <div className="nav">
            <InfoBar
              room={user.room}
              showSidebar={() => setShowSidebar(true)}
            />
          </div>
          <div className="messages">
            <Messages messages={messages} name={user.name} />
          </div>
          <div className="input">
            <MessageInput
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
              name={user.name}
            />
          </div>
        </>
      )}
    </StyeldChat>
  );
};

export default Chat;
