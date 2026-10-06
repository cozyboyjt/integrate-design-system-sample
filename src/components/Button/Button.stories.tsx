import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronDownIcon, PlusIcon } from '../../icons';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Last 30 Days' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
    size: { control: 'inline-radio', options: ['large', 'small'] },
    leftIcon: { control: false },
    rightIcon: { control: false },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const LeadingIcon: Story = { args: { variant: 'secondary', leftIcon: <PlusIcon /> } };
export const TrailingIcon: Story = { args: { variant: 'secondary', rightIcon: <ChevronDownIcon />, children: 'Filter' } };
export const Small: Story = { args: { variant: 'primary', size: 'small' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };

/** Every Figma variant: Size × Left/Right icon, for each button type, enabled and disabled. Hover and pressed are live. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-32)' }}>
      {(['primary', 'secondary'] as const).map((variant) => (
        <section key={variant}>
          <h3 className="text-heading-3" style={{ margin: '0 0 var(--spacing-16)', textTransform: 'capitalize' }}>
            {variant}
          </h3>
          <div style={{ display: 'grid', gap: 'var(--spacing-16)' }}>
            {(['large', 'small'] as const).map((size) => (
              <div key={size} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                <Button variant={variant} size={size}>Last 30 Days</Button>
                <Button variant={variant} size={size} leftIcon={<PlusIcon />}>Last 30 Days</Button>
                <Button variant={variant} size={size} rightIcon={<PlusIcon />}>Last 30 Days</Button>
                <Button variant={variant} size={size} disabled>Last 30 Days</Button>
                <Button variant={variant} size={size} leftIcon={<PlusIcon />} disabled>Last 30 Days</Button>
                <Button variant={variant} size={size} rightIcon={<PlusIcon />} disabled>Last 30 Days</Button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
