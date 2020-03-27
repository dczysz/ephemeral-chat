import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RouteComponentProps, StaticContext } from 'react-router';

const StyledJoin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const defaultVal = {
  name: 'anonymous',
  room: 'general',
};

interface HistoryState {
  error?: string;
}

const Join: React.FC<RouteComponentProps<{}, StaticContext, HistoryState>> = ({
  history,
}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  // Show error message if it's the reason for being at /
  useEffect(() => {
    if (!history.location.state) return;
    const { error } = history.location.state;
    if (error) {
      history.replace('/');
      alert(error); //TODO
    }
  }, [history]);

  const fixUserInput = (input: string, defaultVal: string) =>
    input.trim() === '' ? defaultVal : input.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(
      `/chat/${fixUserInput(room, defaultVal.room)}#${fixUserInput(
        name,
        defaultVal.name
      )}`
    );
  };

  return (
    <StyledJoin>
      <div>
        <h1>Join</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="anonymous"
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <input
              placeholder="general"
              type="text"
              onChange={e => setRoom(e.target.value)}
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
