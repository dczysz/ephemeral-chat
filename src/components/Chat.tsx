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
  MAX_MESSAGE_LENGTH,
} from '../store/socket';
import InfoBar from './InfoBar';
import MessageInput from './MessageInput';
import Messages from './Messages';
import Sidebar from './Sidebar';
import ErrorModal from './ErrorModal';
import useClickOutside from '../hooks/useClickOutside';
import { validateInput } from '../util';

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
  const [roomLeader, setRoomLeader] = useState<UserType>(null!);
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

    socket.on('roomData', ({ users, leader }: RoomDataType) => {
      console.log('Chat roomdata', leader);

      setUsers(users);
      setRoomLeader(leader);
    });

    return () => {
      socket.off('message');
      socket.off('roomData');
      socket.emit('disconnect');
    };
  }, [messages]);

  const sendMessage = (e?: React.FormEvent) => {
    e && e.preventDefault();
    if (socket) {
      if (message) {
        const _message = validateInput(message, MAX_MESSAGE_LENGTH);

        //TODO better error message
        if (!_message.length) {
          alert(
            'Sorry, that message is not allowed.\nFile upload may be available in the future.'
          );
          return;
        }

        socket.emit('sendMessage', _message, (error: string) => {
          error ? setErrorStr(error) : setMessage('');
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
            <Sidebar users={users} currentUser={user} roomLeader={roomLeader} />
          </div>
          <div className="nav">
            <InfoBar
              room={user.room}
              showSidebar={() => setShowSidebar(true)}
            />
          </div>
          <div className="messages">
            <Messages messages={messages} currentUser={user} />
          </div>
          <div className="input">
            <MessageInput
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </>
      )}
    </StyeldChat>
  );
};

export default Chat;
