import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import {
  ENDPOINT,
  UserType,
  JoinRoomResponseType,
  MessageType,
  RoomDataType,
} from '../store/socket';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import UserList from './UserList';

const StyeldChat = styled.div``;

let socket: SocketIOClient.Socket;

interface MatchParams {
  room: string;
}

const Chat: React.FC<RouteComponentProps<MatchParams>> = ({
  history,
  location,
  match,
}) => {
  const [user, setUser] = useState<UserType>(null!);
  const [users, setUsers] = useState<UserType[]>([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const { room } = match.params;
    const name = location.hash.replace('#', '');

    socket = io(ENDPOINT);

    socket.emit(
      'join',
      { name, room },
      ({ user, error }: JoinRoomResponseType) => {
        if (error) console.log(error);
        if (user) setUser(user);
      }
    );

    return () => {
      socket.emit('disconnect');
    };
  }, [match.params, location.hash]);

  useEffect(() => {
    socket.on('message', (message: MessageType) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }: RoomDataType) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');
    };
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, (error: string) => {
        setMessage('');
        if (error) {
          socket.emit('disconnect');
          history.push('/', { error });
        }
      });
    }
  };

  return (
    <StyeldChat>
      {user && (
        <div>
          <InfoBar room={user.room} />
          <Messages messages={messages} name={user.name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            name={user.name}
          />
        </div>
      )}
      <UserList users={users} />
    </StyeldChat>
  );
};

export default Chat;
