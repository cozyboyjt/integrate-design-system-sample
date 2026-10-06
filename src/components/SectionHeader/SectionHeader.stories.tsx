import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'Components/Section header',
  component: SectionHeader,
  tags: ['autodocs'],
  args: {
    title: 'Member Management View',
    subtitle: 'Detailed analysis and historical data for your BPD',
    onFilter: () => undefined,
  },
  argTypes: { action: { control: false } },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof SectionHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithFilter: Story = {};
export const WithoutFilter: Story = { args: { onFilter: undefined } };
