import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

export interface BreadCrumbProps {
  children?: ReactNode | null;
}

const Breadcrumb: FC<BreadCrumbProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Breadcrumb;
