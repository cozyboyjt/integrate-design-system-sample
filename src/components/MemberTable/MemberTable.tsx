import type { ReactNode } from 'react';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Table, TableRow, type HeaderCellProps } from '../Table/Table';
import { TabBar, type TabBarItem } from '../Tabs/Tabs';
import './MemberTable.css';

export interface MemberTableRow {
  id: string;
  /** Body cells in column order — usually `<BodyCell>` elements. */
  cells: ReactNode;
}

export interface MemberTableProps {
  title: string;
  subtitle?: string;
  tabs: TabBarItem[];
  selectedTab: string;
  onTabChange?: (id: string) => void;
  columns: HeaderCellProps[];
  rows: MemberTableRow[];
  onFilter?: () => void;
}

/** The Member Management card: Section header + Tab bar + Table, in a white card. */
export function MemberTable({
  title,
  subtitle,
  tabs,
  selectedTab,
  onTabChange,
  columns,
  rows,
  onFilter,
}: MemberTableProps) {
  return (
    <section className="ds-member-table">
      <SectionHeader title={title} subtitle={subtitle} onFilter={onFilter} />
      <TabBar tabs={tabs} selectedId={selectedTab} onSelect={onTabChange} aria-label={title} />
      <Table columns={columns}>
        {rows.map((row) => (
          <TableRow key={row.id}>{row.cells}</TableRow>
        ))}
      </Table>
    </section>
  );
}
