import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RouteComponentProps, StaticContext } from 'react-router';

const StyledJoin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

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

  useEffect(() => {
    console.log('Join useEffect [history]');

    // Show error message if it's the reason for being at /
    if (history.location.state) {
      const { error } = history.location.state;
      if (error) {
        history.replace('/'); // Clear error
        alert(error); //TODO
      }
    }
  }, [history]);

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
      <div>
        <h1>Join</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder={defaultVals.name}
              type="text"
              onChange={e => setName(e.target.value.trim().toLowerCase())}
              value={name}
            />
          </div>
          <div>
            <input
              placeholder={defaultVals.room}
              type="text"
              onChange={e => setRoom(e.target.value.trim().toLowerCase())}
              value={room}
            />
          </div>

          <button type="submit">Join</button>
        </form>
      </div>
    </StyledJoin>
  );
};

export default Join;
