import React from 'react';

import { StyledInfoBar } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  room: string;
  showSidebar: () => void;
}

const InfoBar: React.FC<Props> = ({ room, showSidebar }) => (
  <StyledInfoBar>
    <div className="left">
      <h3>{room}</h3>
    </div>
    <div className="right">
      <button onClick={showSidebar} className="show-users">
        Users in room
      </button>
      <Link to="/">Leave Room</Link>
    </div>
  </StyledInfoBar>
);

export default InfoBar;
