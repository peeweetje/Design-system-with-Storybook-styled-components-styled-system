import React from "react";
import { action } from "@storybook/addon-actions";
import {StyledButton } from "../src/Button-Styled";

export default {
  title: "Buttons|Button",
  component: StyledButton,
  parameters: {
    componentSubtitle: "Handy status label",
  },
};

export const text = () => (
  <StyledButton onClick={action("clicked")}>Hello Button</StyledButton>
);

export const emoji = () => (
  <StyledButton onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </StyledButton>
);
