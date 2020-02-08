import React, { FC, ReactNode } from "react";
import { c, hover, disabled } from "classy-ui/macro";

export interface ButtonProps {
  children?: ReactNode | null;
  disabled?: boolean;
  className?: string;
}

export const baseButton = c(
  "w-24",
  "p-2",
  "border-0",
  "bg-blue-500",
  "color-white",
  "rounded-sm",
  "justify-center",
  hover("bg-blue-600"),
  disabled("opacity-50")
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
