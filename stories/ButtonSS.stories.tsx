import React from "react";
import { action } from "@storybook/addon-actions";
import ButtonSS from "../src/components/ButtonSS";

export default {
  title: "Buttons|ButtonSS",
  component: ButtonSS,
  parameters: {
    componentSubtitle: "Handy status label",
  },
};

export const Primary = () => (
  <ButtonSS onClick={action("clicked")} variant="primary">
    Primary
  </ButtonSS>
);

export const Secondary = () => (
  <ButtonSS onClick={action("clicked")} variant="secondary">
    Secondary
  </ButtonSS>
);
