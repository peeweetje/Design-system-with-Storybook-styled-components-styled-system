import React, { FC, ReactNode } from 'react';
import { BtnContainer } from './button.styles';

export interface ButtonProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Text you want to display in your button, or an icon **/
  children: ReactNode | null;

  variant: 'primary' | 'secondary' | 'disabled';
}

export const Button: FC<ButtonProps> = ({ onClick, children, variant }) => (
  <BtnContainer onClick={onClick} variant={variant}>
    {children}
  </BtnContainer>
);

export default Button;
