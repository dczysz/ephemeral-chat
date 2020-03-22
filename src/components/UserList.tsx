import React from 'react';
import styled from 'styled-components';

import { UserType } from '../store/socket';

const StyledUserList = styled.div``;

interface Props {
  users: UserType[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <StyledUserList>
      {users.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </StyledUserList>
  );
};

export default UserList;
