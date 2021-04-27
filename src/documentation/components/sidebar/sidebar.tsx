import React, { FC } from 'react';
import {
  ContainerSidebar,
  SidebarTitle,
  NavList,
  NavItem,
  StyledLink,
} from './sidebar.styles';

const Sidebar: FC = () => {
  return (
    <ContainerSidebar>
      <SidebarTitle>
        <StyledLink to='/'>Components</StyledLink>
      </SidebarTitle>
      <NavList>
        <NavItem>
          <StyledLink to='/button'>Button</StyledLink>
        </NavItem>
      </NavList>
    </ContainerSidebar>
  );
};

export default Sidebar;
