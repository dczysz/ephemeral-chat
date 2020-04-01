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
        <Link to="/">
          <h2>
            ephemeral <span className="tablet-hidden">chat</span>
          </h2>
        </Link>
        <span id="hash">#</span>
        <h3>{room}</h3>
      </div>
      <div className="right">
        <Button type="button" onClick={showSidebar} className="tablet-only">
          users
        </Button>
      </div>
    </div>
  </StyledInfoBar>
);

export default InfoBar;
