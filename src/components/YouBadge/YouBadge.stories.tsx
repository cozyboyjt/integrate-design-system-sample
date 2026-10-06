import type { Meta, StoryObj } from '@storybook/react-vite';
import { YouBadge } from './YouBadge';

const meta = {
  title: 'Components/You badge',
  component: YouBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof YouBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
