import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../../../components/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Success: Story = {
  args: {
    primary: true,
    label: 'Button',
    variant: 'success',
  },
};

export const Info: Story = {
  args: {
    primary: true,
    label: 'Button',
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: 'Button',
    variant: 'warning',
  },
};

export const Delete: Story = {
  args: {
    primary: true,
    label: 'Button',
    variant: 'delete',
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: 'small',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    primary: true,
    size: 'medium',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
    label: 'Button',
  },
  tags: ['experimental'],
};
