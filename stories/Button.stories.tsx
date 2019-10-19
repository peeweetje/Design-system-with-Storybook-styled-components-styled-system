import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../src/Button";

export default {
  title: "Buttons|Buttons",
  component: Button,
  parameters: {
    componentSubtitle: "Handy status label",
  },
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Primary = () => (
  <Button onClick={action("clicked")}>Primary</Button>
);

export const Secondary = () => (
  <Button onClick={action("clicked")}>Secondary</Button>
);

export const Disabled = () => (
  <Button onClick={action("clicked")}>Secondary</Button>
);
