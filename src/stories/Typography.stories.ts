import type { Meta, StoryObj } from "@storybook/react-vite";
import Typography from "./Typography";

const meta = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "body1", "body2", "caption"],
    },
  },
  args: {
    children: "Texto de ejemplo",
    variant: "body1",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Body: Story = {
  args: {
    variant: "body1",
    children: "Texto de cuerpo",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Texto de caption",
  },
};
