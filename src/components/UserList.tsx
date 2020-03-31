import React from 'react';

import { StyledUserList } from './styles';
import { UserType } from '../store/socket';

interface Props {
  users: UserType[];
  name: string;
}

const UserList: React.SFC<Props> = ({ users, name }) => {
  return (
    <StyledUserList>
      <ul>
        {users.map(usr => (
          <li
            key={usr.name}
            className={usr.name === name ? 'current-user' : ''}
          >
            {usr.name}
          </li>
        ))}
      </ul>
    </StyledUserList>
  );
};

export default UserList;
