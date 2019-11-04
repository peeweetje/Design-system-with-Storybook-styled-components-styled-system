import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Description of children **/
  children?: ReactNode | null;
}

/**
 * This is a component description and should sit directly above your component
 */
export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.blues[4]};
  background-color: ${props => props.theme.colors.blues[3]};
  color: ${props => props.theme.colors.greys[8]};
  margin: 0 1em;
  padding: 0.25em 1em;
`;
