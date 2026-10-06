import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { BodyCell, StatusPill, type HeaderCellProps } from '../components/Table/Table';
import { Button } from '../components/Button/Button';
import { Chip } from '../components/Chip/Chip';
import { ChevronDownIcon } from '../icons';
import { KpiCard, KpiRow } from '../components/Kpi/Kpi';
import { MemberTable, type MemberTableRow } from '../components/MemberTable/MemberTable';
import { Navbar } from '../components/Navigation/Navigation';
import { TopBar } from '../components/TopBar/TopBar';

const columns: HeaderCellProps[] = [
  { label: 'Name', sortable: true },
  { label: 'Status' },
  { label: 'Program' },
  { label: 'Score' },
  { label: 'Clinician' },
  { label: '#Sessions' },
  { label: 'Last Log in' },
  { label: 'Medications' },
];

const plain = (id: string, score: string): MemberTableRow => ({
  id,
  cells: (
    <>
      <BodyCell>Guy Hawkins</BodyCell>
      <BodyCell>Moderate</BodyCell>
      <BodyCell tone="strong">BPD</BodyCell>
      <BodyCell>{score}</BodyCell>
      <BodyCell>Selina Kyle</BodyCell>
      <BodyCell>4</BodyCell>
      <BodyCell>09/25/2025</BodyCell>
      <BodyCell>Medications</BodyCell>
    </>
  ),
});

const rows: MemberTableRow[] = [
  {
    id: 'r1',
    cells: (
      <>
        <BodyCell>Guy Hawkins</BodyCell>
        <BodyCell>
          <StatusPill label="Moderate" />
        </BodyCell>
        <BodyCell tone="strong">BPD</BodyCell>
        <BodyCell>
          <Chip tone="success">32</Chip>
        </BodyCell>
        <BodyCell>Selina Kyle</BodyCell>
        <BodyCell>4</BodyCell>
        <BodyCell>09/25/2025</BodyCell>
        <BodyCell tone="muted">lorem ipsum, lorem ipmsum</BodyCell>
      </>
    ),
  },
  plain('r2', '32'),
  plain('r3', '7'),
  plain('r4', '42'),
  plain('r5', '2'),
  plain('r6', '1'),
];

const tabs = [
  { id: 'all', label: 'All Members' },
  { id: 'risk', label: 'Members at risk' },
  { id: 'first', label: 'Members Still in First Month' },
  { id: 'revenue', label: 'Revenue' },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'courses', label: 'Courses' },
  { id: 'sessions', label: 'Sessions' },
  { id: 'community', label: 'Community' },
];

function Dashboard() {
  const [tab, setTab] = useState('all');
  const [nav, setNav] = useState('community');
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-surface-default)' }}>
      <TopBar
        logo={<strong className="text-heading-3">Integrate</strong>}
        userName="Ashley Zahabian"
        userRole="Admin"
        notificationCount={6}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <Navbar items={navItems} activeId={nav} onSelect={setNav} />
        <main style={{ flex: 1, padding: '32px 48px', display: 'grid', gap: 30, alignContent: 'start', minWidth: 0 }}>
          <div style={{ display: 'grid', gap: 24 }}>
            <Breadcrumb items={[{ label: 'Integrate BPD', href: '#' }, { label: 'Admin Dashboard' }]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 style={{ margin: 0, font: '700 40px/1.5 var(--font-family)', letterSpacing: '-0.02em' }}>Admin Dashboard</h1>
              <Button variant="secondary" leftIcon={<ChevronDownIcon />}>
                Last 30 Days
              </Button>
            </div>
            <KpiRow>
              <KpiCard label="Members" value={7} delta={{ text: '+12.8%', tone: 'success' }} />
              <KpiCard label="Alerts" value={7} trend="down" delta={{ text: '+12.8%', tone: 'error' }} />
              <KpiCard label="Revenue" value={7} trend="neutral" delta={{ text: '+12.8%', tone: 'info' }} />
            </KpiRow>
          </div>
          <MemberTable
            title="Member Management View"
            subtitle="Detailed analysis and historical data for your BPD"
            tabs={tabs}
            selectedTab={tab}
            onTabChange={setTab}
            columns={columns}
            rows={rows}
            onFilter={() => undefined}
          />
        </main>
      </div>
    </div>
  );
}

const meta = {
  title: 'Screens/Admin Dashboard',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

/** Top bar, Navbar, Breadcrumb, KPI row and the Member table assembled from the library. */
export const Final: Story = { render: () => <Dashboard /> };
