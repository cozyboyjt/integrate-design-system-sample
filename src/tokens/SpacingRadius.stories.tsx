import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { radiusTokens, spacingTokens } from './tokenList';

function useTokenValue(token: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (ref.current) setValue(getComputedStyle(ref.current).getPropertyValue(token).trim());
  }, [token]);
  return { ref, value };
}

function SpacingRow({ token }: { token: string }) {
  const { ref, value } = useTokenValue(token);
  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
      <div className="text-body-sm-semibold" style={{ width: 160 }}>
        {token}
      </div>
      <div
        style={{
          width: `var(${token})`,
          height: 16,
          background: 'var(--color-brand-primary)',
          borderRadius: 'var(--radius-sm)',
        }}
      />
      <div className="text-body-sm-regular" style={{ color: 'var(--color-text-secondary)' }}>
        {value}
      </div>
    </div>
  );
}

function RadiusTile({ token }: { token: string }) {
  const { ref, value } = useTokenValue(token);
  return (
    <div ref={ref} style={{ width: 120 }}>
      <div
        style={{
          width: 96,
          height: 96,
          background: 'var(--color-surface-accent)',
          border: '1px solid var(--color-brand-primary)',
          borderRadius: `var(${token})`,
        }}
      />
      <div className="text-body-sm-semibold" style={{ marginTop: 8 }}>
        {token}
      </div>
      <div className="text-body-sm-regular" style={{ color: 'var(--color-text-secondary)' }}>
        {value}
      </div>
    </div>
  );
}

const meta = {
  title: 'Foundations/Spacing & Radius',
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-16)' }}>
      {spacingTokens.map((token) => (
        <SpacingRow key={token} token={token} />
      ))}
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-32)' }}>
      {radiusTokens.map((token) => (
        <RadiusTile key={token} token={token} />
      ))}
    </div>
  ),
};
