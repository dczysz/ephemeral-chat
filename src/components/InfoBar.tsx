import React from 'react';
import styled from 'styled-components';

const StyledInfoBar = styled.div`
  background-color: #48f;
  color: #fff;
  display: flex;
  justify-content: space-between;

  a {
    color: inherit;
  }

  .left {
    display: flex;
    align-items: center;

    ::before {
      content: '';
      display: inline-block;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background-color: #4f8;
      margin: 1rem;
    }
  }
`;

interface Props {
  room: string;
}

const InfoBar: React.FC<Props> = ({ room }) => (
  <StyledInfoBar>
    <div className="left">
      <h3>{room}</h3>
    </div>
    <div className="right">
      <a href="/">Home</a>
    </div>
  </StyledInfoBar>
);

export default InfoBar;
