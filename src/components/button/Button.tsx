import React, { FC, ReactNode } from 'react';
import {StyledButton} from './button.styles'

export interface ButtonProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Text you want to display in your button, or an icon **/
  children?: ReactNode | null;
  /**  Button variant - primary, secondary, disabled**/
  disabled?: boolean;
  primary?: string;
  secondary?: string;
}

/**
 * This is a component description and should sit directly above your component
 */
export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  primary,
  secondary,
  disabled = false,
}) => (
  <StyledButton
    primary={primary}
    secondary={secondary}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;


