import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopBar } from './TopBar';

const Logo = () => (
  <span style={{ font: 'var(--font-weight-semibold) 28px/1 var(--font-family)', letterSpacing: '-0.02em', color: 'var(--color-brand-primary)' }}>
    Integrate
  </span>
);

const meta = {
  title: 'Components/Top bar',
  component: TopBar,
  tags: ['autodocs'],
  args: { logo: <Logo />, userName: 'Ashley Zahabian', userRole: 'Admin', notificationCount: 6 },
  argTypes: { logo: { control: false } },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TopBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoNotifications: Story = { args: { notificationCount: undefined } };
