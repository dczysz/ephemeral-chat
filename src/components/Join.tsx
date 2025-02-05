import React, { useState } from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

import { StyledJoin } from './styles';
import { MAX_NAME_LENGTH, MAX_ROOM_LENGTH } from '../store/socket';
import { validateInput } from '../util';
import Input from './Input';
import Button from './Button';
import Modal from './Modal';

const defaultVals = {
  name: 'anonymous',
  room: 'general',
};

interface HistoryState {
  error?: string;
  name?: string;
}

const Join: React.FC<RouteComponentProps<{}, StaticContext, HistoryState>> = ({
  history,
}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Fix user input and apply defaults if necessary
    const fixedName = validateInput(
      name.toLowerCase(),
      MAX_NAME_LENGTH,
      defaultVals.name
    );
    const fixedRoom = validateInput(
      room.toLowerCase(),
      MAX_ROOM_LENGTH,
      defaultVals.room
    );

    //TODO better error message
    if (!fixedName.length) {
      alert('Invalid name');
    } else if (!fixedRoom.length) {
      alert('Invalid room');
    }

    history.push(`/chat/${fixedRoom}`, {
      name: fixedName,
    });
  };

  return (
    <StyledJoin>
      <Modal heading="join">
        <form onSubmit={handleSubmit}>
          <label>
            <span>name</span>
            <Input
              placeholder={defaultVals.name}
              onChange={e => setName(e.target.value.toLowerCase())}
              value={name}
              maxLength={MAX_NAME_LENGTH}
              className="input"
            />
          </label>
          <label>
            <span>room</span>
            <Input
              placeholder={defaultVals.room}
              onChange={e => setRoom(e.target.value.toLowerCase())}
              value={room}
              maxLength={MAX_ROOM_LENGTH}
              className="input"
            />
          </label>

          <Button type="submit" primary>
            join
          </Button>
        </form>
      </Modal>
    </StyledJoin>
  );
};

export default Join;
