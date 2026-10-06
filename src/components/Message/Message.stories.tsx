import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthorLine, Message, Reaction, ReplyQuote } from './Message';

const meta = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  args: {
    name: 'Sarah M',
    time: 'Today at 2:30 PM',
    initials: 'SM',
    body: 'Hey everyone! Just wanted to share some resources I found helpful for managing anxiety.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 840 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Message>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithReaction: Story = { args: { reaction: { text: '3 people' } } };
export const Reacted: Story = { args: { reaction: { text: 'You and 2 people', reacted: true } } };
export const OwnMessage: Story = { args: { name: 'Ashley Zahabian', initials: 'A', isYou: true } };
export const Reply: Story = {
  args: {
    name: 'Ashley Zahabian',
    initials: 'A',
    isYou: true,
    replyTo: {
      initials: 'A',
      text: '@Alex Hey everyone! I was wondering if anyone here has experience with mindfulness meditation and how to get started.',
    },
  },
};

/** The small pieces on their own. */
export const Atoms: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-24)', justifyItems: 'start' }}>
      <AuthorLine name="Sarah M" time="Today at 2:30 PM" />
      <AuthorLine name="Ashley Zahabian" time="Today at 3:15 PM" isYou />
      <Reaction text="3 people" />
      <Reaction text="You and 2 people" reacted />
      <div style={{ width: 560 }}>
        <ReplyQuote initials="A" text="@Alex Hey everyone! I was wondering if anyone here has experience." />
      </div>
    </div>
  ),
};
