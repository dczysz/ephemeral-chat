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
import Modal from './Modal';
import useClickOutside from '../hooks/useClickOutside';
import { validateInput } from '../util';
import Button from './Button';
import Input from './Input';

let socket: SocketIOClient.Socket;

interface MatchParams {
  room: string;
}

interface HistoryState {
  error?: string;
  name?: string;
}

type ErrorType = {
  msg: string;
  type: string;
};

const Chat: React.FC<RouteComponentProps<
  MatchParams,
  StaticContext,
  HistoryState
>> = ({ history, match }) => {
  const [user, setUser] = useState<UserType>({ name: '', room: '' });
  const [users, setUsers] = useState<UserType[]>([]);
  const [roomLeader, setRoomLeader] = useState<UserType | null>(null);
  const [privateRoom, setPrivateRoom] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [error, setError] = useState<ErrorType | null>(null);
  const [roomPassword, setRoomPassword] = useState('');
  const sidebarRef = useRef(null!);

  useClickOutside(sidebarRef, () =>
    showSidebar ? setShowSidebar(false) : null
  );

  // Connect socket to server
  useEffect(() => {
    // Fix back button not closing socket
    //TODO: Still not actually disconnecting
    if (socket) {
      console.log('Existing socket found, disconnecting before rejoining');
      socket.emit('disconnect');
      socket.close();
    }

    socket = io(ENDPOINT);

    const { room } = match.params;
    let name =
      history.location.state && history.location.state.name
        ? history.location.state.name
        : '';

    socket.emit(
      'join',
      { name, room },
      ({ user, error }: JoinRoomResponseType) => {
        if (error) {
          setError(error);
        } else if (user) {
          setUser(user);
          setError(null);
        }
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

    socket.on('roomData', ({ users, leader, isPrivate }: RoomDataType) => {
      setUsers(users);
      setRoomLeader(leader);
      setPrivateRoom(isPrivate);
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
          error ? setError({ msg: error, type: 'fatal' }) : setMessage('');
        });
      }
    } else {
      setError({ msg: 'Connection to server lost', type: 'fatal' });
    }
  };

  const joinRoom = (e?: React.FormEvent) => {
    e && e.preventDefault();

    if (!roomPassword.length) return;

    const { room } = match.params;
    let name =
      history.location.state && history.location.state.name
        ? history.location.state.name
        : '';

    socket.emit(
      'join',
      { name, room, pass: roomPassword },
      ({ user, error }: JoinRoomResponseType) => {
        if (error) {
          setError(error);
        } else if (user) {
          setUser(user);
          setError(null);
        }
      }
    );
  };

  const exitToHome = () => {
    socket.off('join');
    socket.off('message');
    socket.off('roomData');
    socket.emit('disconnect');
    socket.close();
    history.push('/', { error: error ? error.msg : 'Unknown error' });
  };

  return (
    <StyeldChat showSidebar={showSidebar}>
      {error ? (
        <Modal heading={error.type === 'password' ? 'private room' : 'uh oh!'}>
          <p>{error.msg}</p>
          <form className="error-modal" onSubmit={joinRoom}>
            {error.type === 'password' ? (
              <>
                <Input
                  type="password"
                  value={roomPassword}
                  onChange={e => setRoomPassword(e.target.value)}
                  placeholder="room password"
                />
                <div className="buttons">
                  <Button onClick={exitToHome}>go home</Button>
                  <Button primary={roomPassword.length > 0} type="submit">
                    submit
                  </Button>
                </div>
              </>
            ) : (
              <div className="buttons">
                <Button
                  type={error.type === 'fatal' ? 'submit' : 'button'}
                  onClick={exitToHome}
                >
                  go home
                </Button>
              </div>
            )}
          </form>
        </Modal>
      ) : user.id ? (
        <>
          <div className="sidebar" ref={sidebarRef}>
            <Sidebar
              users={users}
              currentUser={user}
              roomLeader={roomLeader}
              socket={socket}
              isPrivate={privateRoom}
            />
          </div>
          <div className="nav">
            <InfoBar
              room={user.room}
              showSidebar={() => setShowSidebar(true)}
              isPrivate={privateRoom}
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
      ) : null}
    </StyeldChat>
  );
};

export default Chat;
