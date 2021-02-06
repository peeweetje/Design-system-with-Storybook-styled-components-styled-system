import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface ModalProps {
  /** Description of onClick function which returns void **/
  onClick?: () => void;
  /** Text you want to display in your modal **/
  children?: ReactNode | null;
  showModal?: boolean;
  openModal?: () => boolean;
  closeModal?: () => boolean;
}

export const Modal: FC<ModalProps> = ({ children, onClick }) => {
  return <StyledModal onClick={onClick}>{children}</StyledModal>;
};

export default Modal;

export const StyledModal = styled.div<ModalProps>`
  justify-content: center;
  align-items: center;
  height: 12em;
  width: 22em;
  padding: 1em;
  z-index: 1;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.blues[3]};
  background-color: white;
  transition: all 0.3s ease-out;
`;
