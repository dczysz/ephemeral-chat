import React, { useState } from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

import { StyledJoin } from './styles';
import Input from './Input';
import Button from './Button';

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
    console.log('handling submit');
    e.preventDefault();

    // Fix user input and apply defaults if necessary
    const _name = name.trim().length
      ? name.trim().toLowerCase()
      : defaultVals.name;
    const _room = room.trim().length
      ? room.trim().toLowerCase()
      : defaultVals.room;

    history.push(`/chat/${_room}`, {
      name: _name,
    });
  };

  return (
    <StyledJoin>
      <div className="modal">
        <h1>join</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>name</span>
            <Input
              placeholder={defaultVals.name}
              onChange={e => setName(e.target.value.trim().toLowerCase())}
              value={name}
            />
          </label>
          <label>
            <span>room</span>
            <Input
              placeholder={defaultVals.room}
              onChange={e => setRoom(e.target.value.trim().toLowerCase())}
              value={room}
            />
          </label>

          <Button type="submit" primary>
            Join
          </Button>
        </form>
      </div>
    </StyledJoin>
  );
};

export default Join;
