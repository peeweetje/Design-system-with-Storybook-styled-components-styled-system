import React, { FC, ReactNode } from "react";
import { c, hover } from "classy-ui/macro";

export interface ButtonProps {
  children?: ReactNode | null;
  disabled?: boolean;
  className?: string;
}

const baseButton = c(
  "p-2",
  "border-0",
  "bg-blue-500",
  "color-white",
  "rounded-sm",
  hover("bg-blue-600")
);

export const ClassyButton: FC<ButtonProps> = ({
  children,
  disabled = false,
}) => (
  <button disabled={disabled} className={baseButton}>
    {children}
  </button>
);

export default ClassyButton;
