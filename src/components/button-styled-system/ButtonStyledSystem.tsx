// example Button with variants
import styled from "styled-components";
import { variant, VariantArgs } from "styled-system";
import React, { FC, ReactNode } from "react";
import theme from "../../styles/theme";

export interface ButtonStyledSystemProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Text you want to display in your button, or an icon **/
  children?: ReactNode | null;
  /**  Button variant - primary, secondary, disabled**/
  variant: string;
  disabled?: boolean;
}

export const ButtonStyledSystem: FC<ButtonStyledSystemProps> = ({
  onClick,
  children,
  disabled = false,
  ...buttonStyles
}) => (
  <StyledButtonStyledSystem
    disabled={disabled}
    {...buttonStyles}
    onClick={onClick}
  >
    {children}
  </StyledButtonStyledSystem>
);

export default ButtonStyledSystem;

// TODO: Add border-styles and radii to theme

const buttonSpacing = {
  py: [2],
  px: [3],
};

const StyledButtonStyledSystem = styled("button")(
  {
    appearance: "none",
    "&:hover": {
      cursor: "pointer",
    },
    "&:disabled": {
      border: "none",
      color: theme.colors.greys[6],
      backgroundColor: theme.colors.greys[3],
      borderRadius: "3px",
      padding: `${theme.space[2]}px ${theme.space[3]}px`,
      "&:hover": {
        backgroundColor: theme.colors.greys[4],
        color: theme.colors.greys[7],
        cursor: "not-allowed",
      },
    },
  },
  variant({
    variants: {
      primary: {
        border: "none",
        color: "greys.0",
        bg: "blues.3",
        borderRadius: "3px",
        ...buttonSpacing,
        "&:hover": {
          bg: "blues.4",
        },
      },
      secondary: {
        color: "blues.3",
        bg: "greys.0",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "blues.3",
        borderRadius: "3px",
        ...buttonSpacing,
        "&:hover": {
          color: "blues.4",
          borderColor: "blues.4",
        },
      },
    },
  } as VariantArgs)
);
