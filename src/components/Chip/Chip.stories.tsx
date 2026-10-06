import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { children: '+12.8%' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['neutral', 'success', 'warning', 'error', 'info'] },
    size: { control: 'inline-radio', options: ['small', 'large'] },
  },
} satisfies Meta<typeof Chip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = { args: { tone: 'success' } };
export const Error: Story = { args: { tone: 'error' } };
export const Info: Story = { args: { tone: 'info' } };

/** Figma: Property 1 (size) × State (tone). Chips are non-interactive labels. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-16)' }}>
      {(['small', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'center' }}>
          {(['neutral', 'success', 'warning', 'error', 'info'] as const).map((tone) => (
            <Chip key={tone} tone={tone} size={size}>
              {tone[0].toUpperCase() + tone.slice(1)}
            </Chip>
          ))}
        </div>
      ))}
    </div>
  ),
};
