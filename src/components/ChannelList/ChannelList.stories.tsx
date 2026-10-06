import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChannelGroup, ChannelRow, GroupHeader } from './ChannelList';

const meta = {
  title: 'Components/Channel list',
  component: ChannelGroup,
  tags: ['autodocs'],
  args: { label: 'Favorite' },
  decorators: [
    (Story) => (
      <div style={{ width: 439 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChannelGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  args: {
    label: 'Favorite',
    children: (
      <>
        <ChannelRow label="general" selected />
        <ChannelRow label="resources 5" unread={2} />
        <ChannelRow label="highlight" unread={5} />
      </>
    ),
  },
};

export const GroupCollapsed: Story = { args: { ...Group.args, open: false } };

/** Figma: Channel row · State × Show badge. */
export const Rows: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div>
      <ChannelRow label="general" />
      <ChannelRow label="general" selected />
      <ChannelRow label="support" unread={1} />
    </div>
  ),
};

/** Figma: Group header · State × Show add. */
export const Headers: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-16)' }}>
      <GroupHeader label="Favorite" expanded />
      <GroupHeader label="Favorite" expanded={false} />
      <GroupHeader label="Text Channels" expanded onAdd={() => undefined} />
    </div>
  ),
};

function ListDemo() {
  const [selected, setSelected] = useState('general');
  const [open, setOpen] = useState({ fav: true, text: true, res: true });
  const row = (id: string, label: string, unread?: number) => (
    <ChannelRow key={id} label={label} unread={unread} selected={selected === id} onClick={() => setSelected(id)} />
  );
  return (
    <div style={{ display: 'grid', gap: 'var(--spacing-24)' }}>
      <ChannelGroup label="Favorite" open={open.fav} onOpenChange={(v) => setOpen({ ...open, fav: v })}>
        {row('general', 'general')}
        {row('r5', 'resources 5', 2)}
        {row('highlight', 'highlight', 5)}
      </ChannelGroup>
      <ChannelGroup label="Text Channels" open={open.text} onOpenChange={(v) => setOpen({ ...open, text: v })}>
        {row('intro', 'introductions')}
        {row('support', 'Support', 1)}
      </ChannelGroup>
      <ChannelGroup label="Resources channels" open={open.res} onOpenChange={(v) => setOpen({ ...open, res: v })}>
        {['resources1', 'resources2', 'resources3', 'resources4'].map((n) => row(n, n))}
      </ChannelGroup>
    </div>
  );
}

/** The full list from the module screen — click rows and group headers. */
export const FullList: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ListDemo />,
};
