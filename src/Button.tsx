import React, { FC, ReactNode } from "react";
import {StyledButton} from './Button-Styled'


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
