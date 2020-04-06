import React from 'react';
import { AiOutlineMenuUnfold as CloseIcon } from 'react-icons/ai';

import { StyledSidebar } from './styles';
import UserList from './UserList';
import LeaderOptions from './LeaderOptions';
import { UserType } from '../store/socket';
import Button from './Button';

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
  return (
    <StyledSidebar>
      <div className="buttons">
        {/* <Button bg="darker">dark</Button> */}
        <Button onClick={close} bg="darker" icon className="tablet-only">
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
