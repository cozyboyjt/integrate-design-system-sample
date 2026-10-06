import { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedControl } from './SegmentedControl';

const options: [{ value: string; label: string }, { value: string; label: string }] = [
  { value: 'channels', label: '# Channels' },
  { value: 'dms', label: '# DMs' },
];

const meta = {
  title: 'Components/Segmented control',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: { options, value: 'channels', 'aria-label': 'Conversation type' },
  argTypes: { onChange: { action: 'changed' } },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 439 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SegmentedControl>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FirstSelected: Story = {};
export const SecondSelected: Story = { args: { value: 'dms' } };

function InteractiveDemo(args: ComponentProps<typeof SegmentedControl>) {
  const [value, setValue] = useState(args.value);
  return <SegmentedControl {...args} value={value} onChange={setValue} />;
}

/** Click to switch. */
export const Interactive: Story = {
  render: (args) => <InteractiveDemo {...args} />,
};
