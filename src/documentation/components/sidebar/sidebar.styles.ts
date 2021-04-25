import styled from 'styled-components';

export const ContainerSidebar = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    width: 200px;
    background:  ${(props) => props.theme.colors.grey[8]};
    color: #fff;
  `

