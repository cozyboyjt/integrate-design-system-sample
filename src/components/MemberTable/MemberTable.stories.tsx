import { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../Chip/Chip';
import { BodyCell, StatusPill, type HeaderCellProps } from '../Table/Table';
import { MemberTable, type MemberTableRow } from './MemberTable';

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

const memberRows: MemberTableRow[] = [
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

const memberTabs = [
  { id: 'all', label: 'All Members' },
  { id: 'risk', label: 'Members at risk' },
  { id: 'first', label: 'Members Still in First Month' },
  { id: 'revenue', label: 'Revenue' },
];


const meta = {
  title: 'Components/Member table',
  component: MemberTable,
  tags: ['autodocs'],
  args: {
    title: 'Member Management View',
    subtitle: 'Detailed analysis and historical data for your BPD',
    tabs: memberTabs,
    selectedTab: 'all',
    columns,
    rows: memberRows,
    onFilter: () => undefined,
  },
  argTypes: { onTabChange: { action: 'tab changed' } },
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1529 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MemberTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function InteractiveTable(args: ComponentProps<typeof MemberTable>) {
  const [tab, setTab] = useState(args.selectedTab);
  return <MemberTable {...args} selectedTab={tab} onTabChange={setTab} />;
}
export const Interactive: Story = { render: (args) => <InteractiveTable {...args} /> };
