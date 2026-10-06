import type { Meta, StoryObj } from '@storybook/react-vite';
import { textStyles } from './tokenList';

const meta = {
  title: 'Foundations/Typography',
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

/** Apply with the class name, e.g. `<p className="text-body-md-regular">`. */
export const TextStyles: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-24)' }}>
      {textStyles.map((style) => (
        <div
          key={style.name}
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            alignItems: 'baseline',
            gap: 'var(--spacing-24)',
            paddingBottom: 'var(--spacing-16)',
            borderBottom: '1px solid var(--color-border-default)',
          }}
        >
          <div>
            <div className="text-body-sm-semibold">{style.name}</div>
            <div className="text-body-sm-regular" style={{ color: 'var(--color-text-secondary)' }}>
              .{style.className}
              <br />
              {style.spec}
            </div>
          </div>
          <div className={style.className}>Members at risk need a follow-up this week</div>
        </div>
      ))}
    </div>
  ),
};
