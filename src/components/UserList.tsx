import React from 'react';

import { UserType } from '../store/socket';
import { StyledUserList } from './styles';

export interface Props {
  users: UserType[];
}

const UserList: React.SFC<Props> = ({ users }) => {
  return (
    <StyledUserList>
      <ul>
        {users.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </StyledUserList>
  );
};

export default UserList;
