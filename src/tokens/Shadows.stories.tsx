import type { Meta, StoryObj } from '@storybook/react-vite';
import { shadowTokens } from './tokenList';

const meta = {
  title: 'Foundations/Shadows',
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Elevation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-32)', padding: 'var(--spacing-16)' }}>
      {shadowTokens.map((token) => (
        <div key={token}>
          <div
            style={{
              width: 160,
              height: 96,
              background: 'var(--color-surface-card)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: `var(${token})`,
            }}
          />
          <div className="text-body-sm-semibold" style={{ marginTop: 'var(--spacing-8)' }}>
            {token}
          </div>
        </div>
      ))}
    </div>
  ),
};
