import React, { useState } from 'react';
import { MdSend as SendIcon } from 'react-icons/md';
import { AiOutlineCloseCircle as CloseIcon } from 'react-icons/ai';

import { UserType } from '../store/socket';
import { StyledLeaderOptions } from './styles';
import Input from './Input';
import Button from './Button';

interface Props {
  user: UserType;
  roomLeader: UserType;
  socket: SocketIOClient.Socket;
  isPrivate: boolean;
}

type PassStatus = 'collapsed' | 'expanded' | 'error';

const LeaderOptions: React.FC<Props> = ({
  user,
  roomLeader,
  socket,
  isPrivate,
}) => {
  const [passStatus, setPassStatus] = useState<PassStatus>('collapsed');
  const [newRoomPass, setNewRoomPass] = useState('');
  const isLeader = user.num === roomLeader.num;

  const emitSetRoomPass = (newPass: string) => {
    socket.emit('setRoomPass', newPass, (error: string) => {
      if (error) {
        setPassStatus('error');
        alert(error);
        return;
      }
      setNewRoomPass('');
      setPassStatus('collapsed');
    });
  };

  const handlePasswordFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passStatus === 'collapsed') {
      if (isPrivate) {
        emitSetRoomPass('');
      } else {
        setPassStatus('expanded');
      }
    } else if (newRoomPass.trim().length) {
      emitSetRoomPass(newRoomPass);
    } else {
      setPassStatus('collapsed');
    }
  };

  return (
    <StyledLeaderOptions>
      <h4 className="heading">
        {isLeader
          ? 'you are the room leader'
          : `${roomLeader.name}#${roomLeader.num} is the room leader`}
      </h4>
      {isLeader && (
        <form
          onSubmit={handlePasswordFormSubmit}
          className={passStatus === 'collapsed' ? 'collapsed' : ''}
        >
          <Input
            value={newRoomPass}
            onChange={e => setNewRoomPass(e.target.value)}
            placeholder="room password"
            type="password"
            aria-label="room password"
            aria-hidden={passStatus === 'collapsed'}
            bg="darker"
            className={passStatus === 'collapsed' ? 'hidden' : ''}
          />

          <Button
            type="submit"
            bg="darker"
            icon={passStatus !== 'collapsed'}
            primary={passStatus !== 'collapsed' && newRoomPass.length > 0}
            aria-label={
              passStatus !== 'collapsed'
                ? newRoomPass.length > 0
                  ? 'set password'
                  : 'never mind'
                : null
            }
          >
            {passStatus === 'collapsed' ? (
              isPrivate ? (
                'make public room'
              ) : (
                'make private room'
              )
            ) : newRoomPass.length ? (
              <SendIcon />
            ) : (
              <CloseIcon />
            )}
          </Button>
        </form>
      )}
    </StyledLeaderOptions>
  );
};

export default LeaderOptions;
