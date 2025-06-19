import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'titleXl',
        'titleL',
        'titleM',
        'titleS',
        'titleXs',
        'paragraph',
        'caption',
      ],
    },
    tag: {
      control: { type: 'select' },
      options: ['h1', 'span', 'p', 'label', undefined],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'titleM',
    children: 'Texto de ejemplo',
  },
};