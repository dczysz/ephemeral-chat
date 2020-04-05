import React from 'react';

import { StyledSidebar } from './styles';
import UserList from './UserList';
import LeaderOptions from './LeaderOptions';
import { UserType } from '../store/socket';

interface Props {
  users: UserType[];
  currentUser: UserType;
  roomLeader: UserType;
}

const Sidebar: React.FC<Props> = ({ users, currentUser, roomLeader }) => {
  return (
    <StyledSidebar>
      <LeaderOptions user={currentUser} roomLeader={roomLeader} />

      <UserList users={users} currentUser={currentUser} />
    </StyledSidebar>
  );
};

export default Sidebar;
