// example Button with variants
import styled from "styled-components";
import { variant, VariantArgs } from "styled-system";
import React, { FC, ReactNode } from "react";
import { typography } from "styled-system";

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

// TODO: Consider: Maybe just use a global injected font (Montserrat), instead of setting a font here.

// TODO2: Add border-styles and radii to theme

const buttonSpacing = {
  py: [2],
  px: [3],
  m: [2],
};

const StyledButtonStyledSystem = styled("button")(
  typography,
  {
    appearance: "none",
    fontFamily: "Helvetica",
    "&:hover": {
      cursor: "pointer",
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
          borderColor: "blues.5",
        },
      },
      disabled: {
        border: "none",
        color: "greys.7",
        bg: "greys.3",
        borderRadius: "3px",
        ...buttonSpacing,
        "&:hover": {
          bg: "greys.4",
          cursor: "not-allowed",
        },
      },
    },
  } as VariantArgs)
);
