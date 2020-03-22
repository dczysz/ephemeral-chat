import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useHistory, useParams } from 'react-router';
import queryString from 'query-string';
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

const Chat: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<UserType>(null!);
  const [users, setUsers] = useState<UserType[]>([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);

  const { name } = queryString.parse(history.location.search);
  const { room } = useParams();

  console.log(name, room);
  if (!name || !room) history.push('/');

  useEffect(() => {
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
      socket.off('');
    };
  }, [name, room]);

  useEffect(() => {
    socket.on('message', (message: MessageType) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }: RoomDataType) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');
      socket.off('');
    };
  }, [messages, users]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
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
