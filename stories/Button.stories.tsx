import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../src/Button";

export default {
  title: "Buttons|Button",
  component: Button,
  parameters: {
    componentSubtitle: "Handy status label",
  },
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
