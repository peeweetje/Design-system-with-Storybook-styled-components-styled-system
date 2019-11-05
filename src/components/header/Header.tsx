import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface HeaderProps {
  children?: ReactNode | null;
}

export const Header: FC<HeaderProps> = ({ children }) => (
  <HeaderText>{children}</HeaderText>
);

export default Header;

export const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
`;
