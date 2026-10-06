import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitiveColours, semanticColours, type TokenGroup } from './tokenList';

function Swatch({ token }: { token: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (ref.current) setValue(getComputedStyle(ref.current).getPropertyValue(token).trim());
  }, [token]);
  return (
    <div ref={ref} style={{ width: 168 }}>
      <div
        style={{
          height: 56,
          borderRadius: 'var(--radius-md)',
          background: `var(${token})`,
          border: '1px solid var(--color-border-default)',
        }}
      />
      <div className="text-body-sm-semibold" style={{ marginTop: 8, wordBreak: 'break-all' }}>
        {token}
      </div>
      <div className="text-body-sm-regular" style={{ color: 'var(--color-text-secondary)' }}>
        {value}
      </div>
    </div>
  );
}

function Groups({ groups }: { groups: TokenGroup[] }) {
  return (
    <div style={{ display: 'grid', gap: 'var(--spacing-32)' }}>
      {groups.map((group) => (
        <section key={group.title}>
          <h3 className="text-heading-3" style={{ margin: '0 0 var(--spacing-16)' }}>
            {group.title}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            {group.tokens.map((token) => (
              <Swatch key={token} token={token} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta = {
  title: 'Foundations/Colour',
  parameters: { layout: 'padded' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

/** Role-based tokens. Build with these first. */
export const Semantic: Story = { render: () => <Groups groups={semanticColours} /> };

/** Raw palette. Semantic tokens point at these; reach for them only when no role fits. */
export const Primitives: Story = { render: () => <Groups groups={primitiveColours} /> };
