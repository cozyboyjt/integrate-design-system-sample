import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TwoLevels: Story = {
  args: { items: [{ label: 'Integrate BPD', href: '#' }, { label: 'Admin Dashboard' }] },
};

export const ThreeLevels: Story = {
  args: {
    items: [{ label: 'Courses', href: '#' }, { label: 'Module 1', href: '#' }, { label: 'Lesson 3' }],
  },
};
