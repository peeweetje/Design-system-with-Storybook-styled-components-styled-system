// example Button with variants
import styled from "styled-components";
import { variant, VariantArgs } from "styled-system";
import React, { FC, ReactNode } from "react";
import { typography } from "styled-system";

export interface ButtonStyledSystemProps {
  /** Description of onClick function which returns void **/
  onClick: () => void;
  /** Description of children **/
  children?: ReactNode | null;
  /**  Button variant - primary, secondary**/
  variant: string;
}

export const ButtonStyledSystem: FC<ButtonStyledSystemProps> = ({
  onClick,
  children,
  ...buttonStyles
}) => (
  <StyledButtonStyledSystem {...buttonStyles} onClick={onClick}>
    {children}
  </StyledButtonStyledSystem>
);

export default ButtonStyledSystem;

// TODO: Consider: Maybe just use a global injected font (Montserrat), instead of setting a font here.

// TODO: Add hover styles for primary and secondary button

// TODO2: Add border-styles and radii to theme

const StyledButtonStyledSystem = styled("button")(
  typography,
  {
    appearance: "none",
    fontFamily: "Helvetica",
  },
  variant({
    variants: {
      primary: {
        border: "none",
        color: "white",
        bg: "blue400",
        borderRadius: "3px",
        py: [2],
        px: [3],
        m: [2],
      },
      secondary: {
        color: "blue400",
        bg: "white",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "blue400",
        borderRadius: "3px",
        py: [2],
        px: [3],
        m: [2],
      },
    },
  } as VariantArgs)
);
