import { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar, NavItem, type NavbarItem } from './Navigation';

const items: NavbarItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'courses', label: 'Courses' },
  { id: 'sessions', label: 'Sessions' },
  { id: 'community', label: 'Community' },
];

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: { items, activeId: 'community' },
  argTypes: { onSelect: { action: 'selected' } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Navbar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CommunityActive: Story = {};
export const HomeActive: Story = { args: { activeId: 'home' } };

function InteractiveNavbar(args: ComponentProps<typeof Navbar>) {
  const [active, setActive] = useState(args.activeId);
  return <Navbar {...args} activeId={active} onSelect={setActive} />;
}
export const Interactive: Story = { render: (args) => <InteractiveNavbar {...args} /> };

/** The single item on a dark rail. */
export const NavItems: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ background: 'var(--color-brand-primary)', padding: 'var(--spacing-24)', width: 304, display: 'grid', gap: 'var(--spacing-16)' }}>
      <NavItem label="Courses" />
      <NavItem label="Community" active />
    </div>
  ),
};
