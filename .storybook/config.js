import {configure, addDecorator} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
//import {withThemesProvider} from 'storybook-addon-styled-component-theme';

addDecorator(withA11y);
addDecorator(withKnobs, text, boolean, number);
//const themes = [theme1, theme2];
//addDecorator(withThemesProvider(themes));


// automatically import all files ending in *.stories.tsx
configure(
  require.context("../stories", true, /\.stories\.(tsx?|mdx)$/),
  module
);
