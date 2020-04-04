import React from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';

import { StyledInfoBar } from './styles';
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
        <Button
          type="button"
          onClick={showSidebar}
          className="tablet-only icon"
        >
          <TiThMenu />
        </Button>
      </div>
    </div>
  </StyledInfoBar>
);

export default InfoBar;
