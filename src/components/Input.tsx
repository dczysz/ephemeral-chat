import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.form`
  display: flex;
`;

interface Props {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
}

const Input: React.FC<Props> = ({ message, setMessage, sendMessage, name }) => {
  return (
    <StyledInput onSubmit={sendMessage}>
      <p>{name}</p>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </StyledInput>
  );
};

export default Input;
