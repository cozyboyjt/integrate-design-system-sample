import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../Input/Input';
import { SendButton } from './SendButton';

const meta = {
  title: 'Components/Send button',
  component: SendButton,
  tags: ['autodocs'],
  argTypes: { icon: { control: false }, disabled: { control: 'boolean' } },
} satisfies Meta<typeof SendButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };

/** Both are 69px tall — pair the button with Input size="large". */
export const WithInput: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-8)', maxWidth: 720 }}>
      <Input size="large" placeholder="Message #general" />
      <SendButton />
    </div>
  ),
};
