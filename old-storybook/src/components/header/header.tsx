import React, { FC } from 'react';
import {
  NavHeaderCenter,
  NavHeader,
  NavHeaderLeft,
  NavHeaderRight,
} from './header.styles';

export type HeaderProps = {
  left?: string;
  middle?: string;
  right?: string;
};

export const Header: FC<HeaderProps> = ({ left, middle, right }) => {
  return (
    <NavHeader>
      <NavHeaderLeft>{left}</NavHeaderLeft>
      <NavHeaderCenter>{middle}</NavHeaderCenter>
      <NavHeaderRight>{right}</NavHeaderRight>
    </NavHeader>
  );
};

export default Header;
