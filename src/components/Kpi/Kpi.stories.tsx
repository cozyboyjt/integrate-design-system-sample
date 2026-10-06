import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartPlaceholder, KpiCard, KpiFigure, KpiRow } from './Kpi';

const meta = {
  title: 'Components/KPI card',
  component: KpiCard,
  tags: ['autodocs'],
  args: { label: 'Members', value: 7, delta: { text: '+12.8%', tone: 'success' } },
  argTypes: { chart: { control: false } },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 497 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof KpiCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};
export const Error: Story = { args: { label: 'Alerts', delta: { text: '+12.8%', tone: 'error' } } };
export const Info: Story = { args: { label: 'Revenue', delta: { text: '+12.8%', tone: 'info' } } };

/** Three across, as on the Admin Dashboard. */
export const Row: Story = {
  parameters: { controls: { disable: true }, layout: 'padded' },
  decorators: [],
  render: () => (
    <div style={{ maxWidth: 1529 }}>
      <KpiRow>
        <KpiCard label="Members" value={7} delta={{ text: '+12.8%', tone: 'success' }} />
        <KpiCard label="Alerts" value={7} delta={{ text: '+12.8%', tone: 'error' }} />
        <KpiCard label="Revenue" value={7} delta={{ text: '+12.8%', tone: 'info' }} />
      </KpiRow>
    </div>
  ),
};

/** The smaller pieces. */
export const Parts: Story = {
  parameters: { controls: { disable: true } },
  decorators: [],
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'flex-start' }}>
      <KpiFigure label="Members" value={7} delta={{ text: '+12.8%', tone: 'success' }} />
      <ChartPlaceholder />
    </div>
  ),
};
