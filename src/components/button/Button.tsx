import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

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

// TODO2: Change primary and secondary props to variants

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.blues[3]};
  margin: 0 0.5em;
  padding: 0.5em 1em;
  &:hover {
    background-color: ${props => props.theme.colors.blues[4]};
  }
  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.colors.blues[3]};
      color: #fff;
    `};
  ${props =>
    props.secondary &&
    css`
      background-color: ${props => props.theme.colors.greys[0]};
      color: black;
    `};
  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.colors.greys[4]};
      color: black;
      border: 2px solid ${props => props.theme.colors.greys[4]};
      cursor: not-allowed;
      &:hover {
        background-color: ${props => props.theme.colors.greys[5]};
        color: white;
      }
    `};
`;
