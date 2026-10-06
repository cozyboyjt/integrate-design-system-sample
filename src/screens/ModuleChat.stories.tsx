import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChannelGroup, ChannelRow } from '../components/ChannelList/ChannelList';
import { Message } from '../components/Message/Message';
import { MessageThread } from '../components/MessageThread/MessageThread';
import { Navbar } from '../components/Navigation/Navigation';
import { SegmentedControl } from '../components/SegmentedControl/SegmentedControl';
import { TopBar } from '../components/TopBar/TopBar';

const LONG =
  'Hey everyone! I was wondering if anyone here has experience with mindfulness meditation. I’ve been trying to get into it over the past few weeks, but I’m still trying to find my rhythm. I’ve read a bit about how it can help with focus and stress, but when I actually sit down to meditate, I find my mind wandering almost immediately. I’d love to hear how others started out—what helped you stay consistent, and whether you noticed any changes over time. Any tips, favorite apps, or routines that worked for you?';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'courses', label: 'Courses' },
  { id: 'sessions', label: 'Sessions' },
  { id: 'community', label: 'Community' },
];

const groups = [
  { id: 'fav', label: 'Favorite', rows: [{ id: 'general', label: 'general' }, { id: 'r5', label: 'resources 5', unread: 2 }, { id: 'highlight', label: 'highlight', unread: 5 }] },
  { id: 'text', label: 'Text Channels', rows: [{ id: 'intro', label: 'introductions' }, { id: 'support', label: 'Support', unread: 1 }] },
  { id: 'res', label: 'Resources channels', rows: ['resources1', 'resources2', 'resources3', 'resources4'].map((n) => ({ id: n, label: n })) },
];

function Sidebar() {
  const [kind, setKind] = useState('channels');
  const [selected, setSelected] = useState('general');
  const [open, setOpen] = useState<Record<string, boolean>>({ fav: true, text: true, res: true });
  return (
    <aside style={{ width: 487, padding: '24px', display: 'grid', gap: 24, alignContent: 'start', background: 'var(--color-surface-card)', border: '1px solid var(--color-surface-primary)', borderRadius: 'var(--scale-20) 0 0 var(--scale-20)' }}>
      <h2 className="text-body-lg-semibold" style={{ margin: 0 }}>Mental Health Support</h2>
      <SegmentedControl
        aria-label="Conversation type"
        options={[{ value: 'channels', label: '# Channels' }, { value: 'dms', label: '# DMs' }]}
        value={kind}
        onChange={setKind}
      />
      {groups.map((group) => (
        <ChannelGroup key={group.id} label={group.label} open={open[group.id]} onOpenChange={(v) => setOpen({ ...open, [group.id]: v })}>
          {group.rows.map((row) => (
            <ChannelRow key={row.id} label={row.label} unread={'unread' in row ? row.unread : undefined} selected={selected === row.id} onClick={() => setSelected(row.id)} />
          ))}
        </ChannelGroup>
      ))}
    </aside>
  );
}

function ModuleChat() {
  const [nav, setNav] = useState('community');
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-surface-default)' }}>
      <TopBar logo={<strong className="text-heading-3">Integrate</strong>} userName="Ashley Zahabian" userRole="Admin" notificationCount={6} />
      <div style={{ display: 'flex', flex: 1 }}>
        <Navbar items={navItems} activeId={nav} onSelect={setNav} />
        <main style={{ flex: 1, display: 'flex', padding: '26px 32px', minWidth: 0 }}>
          <Sidebar />
          <MessageThread title="General" placeholder="Message #general" className="chat-thread">
            <Message name="Sarah M" initials="SM" time="Today at 2:30 PM" body="Hey everyone! Just wanted to share some resources I found helpful for managing anxiety." reaction={{ text: '3 people' }} />
            <Message name="Jake" initials="J" time="Today at 2:45 PM" body="That’s really helpful, thanks for sharing!" />
            <Message name="Alex" initials="A" time="Today at 3:00 PM" body="Does anyone have experience with mindfulness meditation? I’ve been trying to get into it." reaction={{ text: '5 people' }} />
            <Message name="Community Bot" initials="A" time="Today at 3:15 PM" body="Reminder: We have a group session starting in 30 minutes! Join us in the General Voice channel." reaction={{ text: 'You and 2 people', reacted: true }} />
            <Message name="Alex" initials="A" time="Today at 3:30 PM" body={LONG} />
            <Message name="Ashley Zahabian" initials="A" time="Today at 3:15 PM" body={LONG} isYou replyTo={{ initials: 'A', text: `@Alex ${LONG}` }} />
          </MessageThread>
        </main>
      </div>
      <style>{`.chat-thread { flex: 1; min-width: 0; }`}</style>
    </div>
  );
}

const meta = {
  title: 'Screens/Module chat',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

/** The module screen: Navbar, channel sidebar and message thread, all from the library. */
export const Final: Story = { render: () => <ModuleChat /> };
