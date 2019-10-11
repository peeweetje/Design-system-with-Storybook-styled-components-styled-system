import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Description of children **/
  children?: ReactNode | null;
}

export const ButtonContainer = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

/**
 * This is a component description and should sit directly above your component
 */
export const Button: FC<ButtonProps> = ({ onClick, children }: ButtonProps) => (
  <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
);

export default Button;
