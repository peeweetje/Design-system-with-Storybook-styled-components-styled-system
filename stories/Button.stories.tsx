import React from "react";
import { action } from "@storybook/addon-actions";
import Button, { ButtonContainer } from "../src/Button";

export default {
  title: "Buttons|Button",
  component: Button,
  parameters: {
    componentSubtitle: "Handy status label",
  },
};

export const text = () => (
  <ButtonContainer onClick={action("clicked")}>Hello Button</ButtonContainer>
);

export const emoji = () => (
  <ButtonContainer onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ButtonContainer>
);
