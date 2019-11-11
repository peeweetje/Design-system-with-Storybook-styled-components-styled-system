import React, { FC, ReactNode, useState } from "react";
import styled from "styled-components";

export interface ModalProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Text you want to display in your modal **/
  children?: ReactNode | null;
  toggleModal?: boolean;
}

export const Modal: FC<ModalProps> = ({ children, onClick }) => {
  const [isToggled, setToggled] = useState(false);
  const toggleModal = () => setToggled(!isToggled);

  return <StyledModal onClick={onClick}>{children}</StyledModal>;
};

export default Modal;

export const StyledModal = styled.div<ModalProps>`
  position: absolute;
  box-sizing: border-box;
  height: 25%;
  width: 50%;
  left: 25%;
  top: 30%;
  padding: 16px;
  z-index: 1;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.blues[3]};
  background-color: white;
  transition: all 0.3s ease-out;
`;
