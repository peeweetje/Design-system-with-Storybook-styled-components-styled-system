import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface IButtonProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Description of children **/
  children?: ReactNode | null;
}

/**
 * This is a component description and should sit directly above your component
 */
export const Button: FC<IButtonProps> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;

export const StyledButton = styled.button<IButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${props => props.theme.colors.blue};
  margin: 0 1em;
  padding: 0.25em 1em;
`;
