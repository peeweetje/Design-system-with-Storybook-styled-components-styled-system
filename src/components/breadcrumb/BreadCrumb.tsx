import React, { FC, ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface BreadCrumbProps {
  children?: ReactNode | null;
  to: string;
}

export const BreadcrumbPortal = () => (
  <nav aria-label="Breadcrumb">
    <Items id="breadcrumb" />
  </nav>
);

export const Breadcrumb: FC<BreadCrumbProps> = ({ children, to, ...props }) => {
  const [portalNode, setPortalNode] = useState();

  useEffect(() => {
    setPortalNode(document.getElementById("breadcrumb"));
  }, []);

  return portalNode
    ? ReactDOM.createPortal(
        <Item {...props}>
          <ItemLink to={to}>{children}</ItemLink>
        </Item>,
        portalNode
      )
    : null;
};

const Items = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const Item = styled.li`
  display: inline;

  & + &::before {
    content: "";
    display: inline-block;
    transform: rotate(15deg);
    border-right: 1px solid currentColor;
    height: 1em;
    margin: 0 8px -0.2em;
  }
`;

const ItemLink = styled(NavLink).attrs({ exact: true })`
  color: #36d;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: currentColor;
  }

  &.active {
    border: none;
    color: inherit;
  }
`;
