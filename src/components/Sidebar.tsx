import React from 'react';

import { StyledSidebar } from './styles';
import UserList from './UserList';
import LeaderOptions from './LeaderOptions';
import { UserType } from '../store/socket';

interface Props {
  users: UserType[];
  currentUser: UserType;
  roomLeader: UserType | null;
  socket: SocketIOClient.Socket;
  isPrivate: boolean;
}

const Sidebar: React.FC<Props> = ({
  users,
  currentUser,
  roomLeader,
  socket,
  isPrivate,
}) => {
  return (
    <StyledSidebar>
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
