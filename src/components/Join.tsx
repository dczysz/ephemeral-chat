import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const StyledJoin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Join: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const history = useHistory();

  const fixUserInput = (input: string, defaultVal: string) =>
    input.trim() === '' ? defaultVal : input.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(
      `/chat/${fixUserInput(room, 'general')}?name=${fixUserInput(
        name,
        'anonymous'
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
