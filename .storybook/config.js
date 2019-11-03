import { configure, addDecorator, addParameters } from "@storybook/react";
import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import { loadFontsForStorybook } from "../src/utils/fontLoader";
import { GlobalStyle } from "../src/styles/global";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(withA11y);
addDecorator(withKnobs, text, boolean, number);
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.tsx
configure(require.context("../stories", true, /\.stories\.(tsx|mdx)$/), module);

loadFontsForStorybook();
