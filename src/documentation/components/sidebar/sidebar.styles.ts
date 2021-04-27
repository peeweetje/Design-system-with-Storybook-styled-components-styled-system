import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerSidebar = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    width: 200px;
    background:  ${(props) => props.theme.colors.grey[8]};
    color:  ${(props) => props.theme.colors.grey[0]};
  `
 export const SidebarTitle = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `

 export const NavList = styled.ul`
  list-style-type: none;
  line-height: 2;
  font-size: 1rem;
`;

 export const NavItem = styled.li`
  display: flex;
`;

 export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.grey[0]};
  text-decoration: none;
`;


