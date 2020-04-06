import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineEyeInvisible as PrivateIcon,
  AiOutlineMenuFold as MenuIcon,
} from 'react-icons/ai';

import { StyledInfoBar } from './styles';
import Button from './Button';

interface Props {
  room: string;
  showSidebar: () => void;
  isPrivate: boolean;
}

const InfoBar: React.FC<Props> = ({ room, showSidebar, isPrivate }) => (
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
        {isPrivate && <PrivateIcon title="private room" />}
        <Button
          type="button"
          icon
          onClick={showSidebar}
          className="tablet-only"
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  </StyledInfoBar>
);

export default InfoBar;
