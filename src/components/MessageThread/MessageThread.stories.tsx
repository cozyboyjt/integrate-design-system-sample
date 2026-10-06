import type { Meta, StoryObj } from '@storybook/react-vite';
import { Message } from '../Message/Message';
import { MessageThread, ThreadHeader } from './MessageThread';

const LONG =
  'Hey everyone! I was wondering if anyone here has experience with mindfulness meditation. I’ve been trying to get into it over the past few weeks, but I’m still trying to find my rhythm. I’ve read a bit about how it can help with focus and stress, but when I actually sit down to meditate, I find my mind wandering almost immediately. I’d love to hear how others started out—what helped you stay consistent, and whether you noticed any changes over time. Any tips, favorite apps, or routines that worked for you?';

const meta = {
  title: 'Components/Message thread',
  component: MessageThread,
  tags: ['autodocs'],
  args: { title: 'General', placeholder: 'Message #general' },
  argTypes: { onSend: { action: 'sent' } },
  decorators: [
    (Story) => (
      <div style={{ width: 904, height: 900, display: 'flex' }}>
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof MessageThread>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Conversation: Story = {
  render: (args) => (
    <MessageThread {...args}>
      <Message name="Sarah M" initials="SM" time="Today at 2:30 PM" body="Hey everyone! Just wanted to share some resources I found helpful for managing anxiety." reaction={{ text: '3 people' }} />
      <Message name="Jake" initials="J" time="Today at 2:45 PM" body="That’s really helpful, thanks for sharing!" />
      <Message name="Alex" initials="A" time="Today at 3:00 PM" body="Does anyone have experience with mindfulness meditation? I’ve been trying to get into it." reaction={{ text: '5 people' }} />
      <Message name="Community Bot" initials="A" time="Today at 3:15 PM" body="Reminder: We have a group session starting in 30 minutes! Join us in the General Voice channel." reaction={{ text: 'You and 2 people', reacted: true }} />
      <Message name="Alex" initials="A" time="Today at 3:30 PM" body={LONG} />
      <Message name="Ashley Zahabian" initials="A" time="Today at 3:15 PM" body={LONG} isYou replyTo={{ initials: 'A', text: `@Alex ${LONG}` }} />
    </MessageThread>
  ),
};

export const Empty: Story = {};

export const Header: Story = {
  parameters: { controls: { disable: true } },
  decorators: [],
  render: () => (
    <div style={{ width: 800 }}>
      <ThreadHeader title="General" />
    </div>
  ),
};
