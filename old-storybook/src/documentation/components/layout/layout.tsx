import React, { FC } from 'react';
import { LayoutContainer } from './layout.styles';

const Layout: FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
