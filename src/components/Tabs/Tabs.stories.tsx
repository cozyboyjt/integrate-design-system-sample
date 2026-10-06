import { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tab, TabBar } from './Tabs';

const tabs = [
  { id: 'all', label: 'All Members' },
  { id: 'risk', label: 'Members at risk' },
  { id: 'first', label: 'Members Still in First Month' },
  { id: 'revenue', label: 'Revenue' },
];

const meta = {
  title: 'Components/Tab bar',
  component: TabBar,
  tags: ['autodocs'],
  args: { tabs, selectedId: 'all', 'aria-label': 'Member views' },
  argTypes: { onSelect: { action: 'selected' } },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TabBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const AllMembers: Story = {};
export const AtRisk: Story = { args: { selectedId: 'risk' } };

function InteractiveTabs(args: ComponentProps<typeof TabBar>) {
  const [selected, setSelected] = useState(args.selectedId);
  return <TabBar {...args} selectedId={selected} onSelect={setSelected} />;
}
export const Interactive: Story = { render: (args) => <InteractiveTabs {...args} /> };

/** Figma: Tab · State. */
export const SingleTabs: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div role="tablist" aria-label="Tab examples" style={{ display: 'flex', gap: 'var(--spacing-16)' }}>
      <Tab label="All Members" />
      <Tab label="All Members" selected />
    </div>
  ),
};
