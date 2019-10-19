import { configure, addDecorator } from "@storybook/react";
import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import theme from "../src/theme";
import { ThemeProvider } from "styled-components";

addDecorator(withA11y);
addDecorator(withKnobs, text, boolean, number);
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// automatically import all files ending in *.stories.tsx
configure(require.context("../stories", true, /\.stories\.(tsx|mdx)$/), module);
