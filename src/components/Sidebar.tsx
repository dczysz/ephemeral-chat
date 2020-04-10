import React, { useContext } from 'react';
import { AiOutlineMenuUnfold as CloseIcon } from 'react-icons/ai';
import { FiSun as LightIcon, FiMoon as DarkIcon } from 'react-icons/fi';

import { StyledSidebar } from './styles';
import { UserType } from '../store/socket';
import UserList from './UserList';
import LeaderOptions from './LeaderOptions';
import Button from './Button';
import ThemeToggleContext from '../store/ThemeToggleContext';

interface Props {
  users: UserType[];
  currentUser: UserType;
  roomLeader: UserType | null;
  socket: SocketIOClient.Socket;
  isPrivate: boolean;
  close: () => void;
}

const Sidebar: React.FC<Props> = ({
  users,
  currentUser,
  roomLeader,
  socket,
  isPrivate,
  close,
}) => {
  const { themeMode, toggleTheme } = useContext(ThemeToggleContext);

  return (
    <StyledSidebar>
      <div className="buttons">
        <Button onClick={toggleTheme} icon>
          {themeMode === 'light' ? <DarkIcon /> : <LightIcon />}
        </Button>
        <Button onClick={close} icon className="tablet-only">
          <CloseIcon />
        </Button>
      </div>

      {roomLeader && (
        <LeaderOptions
          user={currentUser}
          roomLeader={roomLeader}
          socket={socket}
          isPrivate={isPrivate}
        />
      )}

      <UserList users={users} currentUser={currentUser} />
    </StyledSidebar>
  );
};

export default Sidebar;
