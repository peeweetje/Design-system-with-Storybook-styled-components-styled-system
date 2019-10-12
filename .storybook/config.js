import {configure, addDecorator} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';

addDecorator(withA11y);
addDecorator(withKnobs, text, boolean, number);
// automatically import all files ending in *.stories.tsx
configure(
  require.context("../stories", true, /\.stories\.(tsx?|mdx)$/),
  module
);
