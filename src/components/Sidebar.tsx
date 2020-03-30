import React from 'react';

import { StyledSidebar } from './styles';

interface Props {}

const Sidebar: React.FC<Props> = ({ children }) => {
  return <StyledSidebar>{children}</StyledSidebar>;
};

export default Sidebar;
