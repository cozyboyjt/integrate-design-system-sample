import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../Chip/Chip';
import { BodyCell, HeaderCell, StatusPill, Table, TableRow, type HeaderCellProps } from './Table';

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

const plainRow = (score: string) => (
  <TableRow>
    <BodyCell>Guy Hawkins</BodyCell>
    <BodyCell>Moderate</BodyCell>
    <BodyCell tone="strong">BPD</BodyCell>
    <BodyCell>{score}</BodyCell>
    <BodyCell>Selina Kyle</BodyCell>
    <BodyCell>4</BodyCell>
    <BodyCell>09/25/2025</BodyCell>
    <BodyCell>Medications</BodyCell>
  </TableRow>
);

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  args: { columns },
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1200 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Figma: Table row · Type=Default. */
export const PlainRows: Story = {
  render: (args) => (
    <Table {...args}>
      {plainRow('32')}
      {plainRow('7')}
      {plainRow('42')}
    </Table>
  ),
};

/** Figma: Table row · Type=Rich — status pill, score chip and a muted medications cell. */
export const RichRow: Story = {
  render: (args) => (
    <Table {...args}>
      <TableRow>
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
      </TableRow>
      {plainRow('32')}
    </Table>
  ),
};

/** The atoms: Header cell, Body cell tones and the Status pill. */
export const Cells: Story = {
  parameters: { controls: { disable: true } },
  decorators: [],
  render: () => (
    <div role="table" aria-label="Cell examples" style={{ display: 'grid', gap: 'var(--spacing-16)', width: 240 }}>
      <div role="row">
        <HeaderCell label="Name" />
      </div>
      <div role="row">
        <HeaderCell label="Name" sortable />
      </div>
      <div role="row">
        <BodyCell>Guy Hawkins</BodyCell>
      </div>
      <div role="row">
        <BodyCell tone="strong">BPD</BodyCell>
      </div>
      <div role="row">
        <BodyCell tone="muted">lorem ipsum</BodyCell>
      </div>
      <div>
        <StatusPill label="Moderate" />
      </div>
    </div>
  ),
};
