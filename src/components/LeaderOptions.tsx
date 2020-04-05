import React from 'react';

import { UserType } from '../store/socket';
import { StyledLeaderOptions } from './styles';

export interface Props {
  user: UserType;
  roomLeader: UserType | null;
}

const LeaderOptions: React.FC<Props> = ({ user, roomLeader }) => {
  if (!roomLeader) return null;

  return (
    <StyledLeaderOptions>
      <h4 className="heading">
        {roomLeader.num === user.num
          ? 'you are the room leader'
          : `${roomLeader.name}#${roomLeader.num} is the room leader`}
      </h4>
    </StyledLeaderOptions>
  );
};

export default LeaderOptions;
