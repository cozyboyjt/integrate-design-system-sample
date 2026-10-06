import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseIcon, SearchIcon } from '../../icons';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  argTypes: {
    size: { control: 'inline-radio', options: ['medium', 'large'] },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLeadingIcon: Story = { args: { leadingIcon: <SearchIcon />, placeholder: 'Search channels' } };
export const WithTrailingIcon: Story = { args: { leadingIcon: <SearchIcon />, trailingIcon: <CloseIcon />, defaultValue: 'general' } };
export const Filled: Story = { args: { defaultValue: 'Selina Kyle' } };
export const Error: Story = { args: { invalid: true, defaultValue: 'Not a valid name' } };
export const Disabled: Story = { args: { disabled: true } };

/** The 69px message box (Figma: Size=Large). */
export const MessageBox: Story = {
  args: { size: 'large', placeholder: 'Message #general' },
};

/** Figma: State × Size × Filled. Focus by clicking into a field. */
export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  decorators: [],
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-16)', maxWidth: 420 }}>
      {(['medium', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'grid', gap: 'var(--spacing-16)' }}>
          <Input size={size} leadingIcon={<SearchIcon />} placeholder="Default" aria-label="Default" />
          <Input size={size} leadingIcon={<SearchIcon />} defaultValue="Filled" aria-label="Filled" />
          <Input size={size} leadingIcon={<SearchIcon />} invalid defaultValue="Error" aria-label="Error" />
          <Input size={size} leadingIcon={<SearchIcon />} disabled placeholder="Disabled" aria-label="Disabled" />
        </div>
      ))}
    </div>
  ),
};
