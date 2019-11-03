import React from "react";
import { action } from "@storybook/addon-actions";
import ButtonStyledSystem from "../src/components/button-styled-system/ButtonStyledSystem";

export default {
  title: "Buttons|ButtonStyledSystem",
  component: ButtonStyledSystem,
  parameters: {
    componentSubtitle: "Handy status label",
  },
};

export const Primary = () => (
  <ButtonStyledSystem onClick={action("clicked")} variant="primary">
    Primary
  </ButtonStyledSystem>
);

export const Secondary = () => (
  <ButtonStyledSystem onClick={action("clicked")} variant="secondary">
    Secondary
  </ButtonStyledSystem>
);
