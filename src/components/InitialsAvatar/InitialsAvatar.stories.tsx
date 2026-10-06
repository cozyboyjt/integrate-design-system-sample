import type { Meta, StoryObj } from '@storybook/react-vite';
import { InitialsAvatar } from './InitialsAvatar';

const meta = {
  title: 'Components/Initials avatar',
  component: InitialsAvatar,
  tags: ['autodocs'],
  args: { initials: 'SM' },
  argTypes: { size: { control: 'inline-radio', options: ['medium', 'small'] } },
} satisfies Meta<typeof InitialsAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = { args: { size: 'medium' } };
export const Small: Story = { args: { size: 'small', initials: 'A' } };
