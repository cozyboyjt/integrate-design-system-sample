import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { BodyCell, StatusPill, type HeaderCellProps } from '../components/Table/Table';
import { Button } from '../components/Button/Button';
import { Chip, type ChipProps } from '../components/Chip/Chip';
import { ChevronDownIcon } from '../icons';
import { KpiCard, KpiRow } from '../components/Kpi/Kpi';
import { MemberTable, type MemberTableRow } from '../components/MemberTable/MemberTable';
import { Navbar } from '../components/Navigation/Navigation';
import { TopBar } from '../components/TopBar/TopBar';
import { navItems, topBarProps } from './shared';

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

type Severity = 'moderate' | 'severe' | 'mild';

const member = (
  id: string,
  name: string,
  status: [string, Severity],
  score: [string, NonNullable<ChipProps['tone']>],
  clinician: string,
  sessions: string,
  lastLogin: string,
  medication: string,
): MemberTableRow => ({
  id,
  cells: (
    <>
      <BodyCell>{name}</BodyCell>
      <BodyCell>
        <StatusPill label={status[0]} tone={status[1]} />
      </BodyCell>
      <BodyCell tone="strong">BPD</BodyCell>
      <BodyCell>
        <Chip tone={score[1]}>{score[0]}</Chip>
      </BodyCell>
      <BodyCell>{clinician}</BodyCell>
      <BodyCell>{sessions}</BodyCell>
      <BodyCell>{lastLogin}</BodyCell>
      <BodyCell tone="muted">{medication}</BodyCell>
    </>
  ),
});

const rows: MemberTableRow[] = [
  member('r1', 'Guy Hawkins', ['Moderate', 'moderate'], ['32', 'neutral'], 'Selina Kyle', '4', '09/25/2025', 'Risperidone'),
  member('r2', 'Diana Prince', ['Severe', 'severe'], ['28', 'error'], 'Bruce Wayne', '3', '11/12/2024', 'Fluoxetin...'),
  member('r3', 'Clark Kent', ['Mild', 'mild'], ['35', 'success'], 'Lois Lane', '5', '07/19/2025', 'Sertralin...'),
  member('r4', 'Barry Allen', ['Moderate', 'moderate'], ['27', 'neutral'], 'Iris West', '2', '02/02/2026', 'Clomipram...'),
  member('r5', 'Guy Hawkins', ['Moderate', 'moderate'], ['32', 'neutral'], 'Selina Kyle', '4', '09/25/2025', 'Bupropion...'),
  member('r6', 'Jessica Jones', ['Severe', 'severe'], ['31', 'error'], 'Luke Cage', '6', '10/30/2024', 'Risperidone'),
  member('r7', 'Matt Murdock', ['Mild', 'mild'], ['29', 'success'], 'Foggy Nelson', '1', '03/15/2025', 'Bupropion...'),
];

const tabs = [
  { id: 'all', label: 'All Members' },
  { id: 'risk', label: 'Members at risk' },
  { id: 'first', label: 'Members Still in First Month' },
  { id: 'revenue', label: 'Revenue' },
];

function Dashboard() {
  const [tab, setTab] = useState('all');
  const [nav, setNav] = useState('home');
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-surface-default)' }}>
      <TopBar {...topBarProps} />
      <div style={{ display: 'flex', flex: 1 }}>
        <Navbar items={navItems} activeId={nav} onSelect={setNav} />
        <main style={{ flex: 1, padding: '32px 47px 32px 40px', display: 'grid', gap: 30, alignContent: 'start', minWidth: 0 }}>
          <div style={{ display: 'grid', gap: 24 }}>
            <Breadcrumb items={[{ label: 'Integrate BPD', href: '#' }, { label: 'Admin Dashboard' }]} />
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0, font: '700 40px/1.5 var(--font-family)' }}>Admin Dashboard</h1>
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
