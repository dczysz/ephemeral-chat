import React from 'react';

import { StyledUserList } from './styles';
import { UserType } from '../store/socket';

interface Props {
  users: UserType[];
  currentUser: UserType;
}

const UserList: React.FC<Props> = ({ users, currentUser }) => {
  return (
    <StyledUserList>
      <ul>
        {users.map(usr => (
          <li
            key={usr.num}
            className={usr.num === currentUser.num ? 'current-user' : ''}
          >
            {`${usr.name}#${usr.num}`}
          </li>
        ))}
      </ul>
    </StyledUserList>
  );
};

export default UserList;
