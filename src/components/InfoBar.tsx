import React from 'react';

import { StyledInfoBar } from './styles';
import { Link } from 'react-router-dom';
import Button from './Button';

interface Props {
  room: string;
  showSidebar: () => void;
}

const InfoBar: React.FC<Props> = ({ room, showSidebar }) => (
  <StyledInfoBar>
    <div className="container">
      <div className="left">
        <h3>{room}</h3>
      </div>
      <div className="right">
        <Button type="button" onClick={showSidebar} className="tablet-only">
          users
        </Button>
        <Link to="/">
          <Button danger type="button">
            leave room
          </Button>
        </Link>
      </div>
    </div>
  </StyledInfoBar>
);

export default InfoBar;
