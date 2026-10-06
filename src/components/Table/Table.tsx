import type { HTMLAttributes, ReactNode } from 'react';
import { ChevronDownIcon } from '../../icons';
import './Table.css';

/* ─── Header cell ───────────────────────────────────────── */

export interface HeaderCellProps {
  label: string;
  /** Shows the sort chevron (Figma: Sortable). */
  sortable?: boolean;
}

export function HeaderCell({ label, sortable = false }: HeaderCellProps) {
  return (
    <div role="columnheader" className="ds-header-cell">
      <span>{label}</span>
      {sortable ? <ChevronDownIcon size={16} /> : null}
    </div>
  );
}

/* ─── Body cell ─────────────────────────────────────────── */

export interface BodyCellProps {
  /** Figma: Tone. Strong for one key column; Muted for supporting text. */
  tone?: 'default' | 'strong' | 'muted';
  children: ReactNode;
}

export function BodyCell({ tone = 'default', children }: BodyCellProps) {
  return (
    <div role="cell" className={`ds-body-cell ds-body-cell--${tone}`}>
      {children}
    </div>
  );
}

/* ─── Status pill ───────────────────────────────────────── */

export interface StatusPillProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
}

export function StatusPill({ label, className, ...rest }: StatusPillProps) {
  return (
    <span className={['ds-status-pill', className].filter(Boolean).join(' ')} {...rest}>
      <span className="ds-status-pill__dot" aria-hidden="true" />
      {label}
    </span>
  );
}

/* ─── Rows + table ──────────────────────────────────────── */

export interface TableHeaderRowProps {
  columns: HeaderCellProps[];
}

export function TableHeaderRow({ columns }: TableHeaderRowProps) {
  return (
    <div role="row" className="ds-table-row ds-table-row--header">
      {columns.map((column) => (
        <HeaderCell key={column.label} {...column} />
      ))}
    </div>
  );
}

export interface TableRowProps {
  /** Body cells, in column order. */
  children: ReactNode;
}

export function TableRow({ children }: TableRowProps) {
  return (
    <div role="row" className="ds-table-row">
      {children}
    </div>
  );
}

export interface TableProps {
  columns: HeaderCellProps[];
  /** Table rows. */
  children?: ReactNode;
  className?: string;
}

/** A white card containing a header row and body rows. Columns share the width equally. */
export function Table({ columns, children, className }: TableProps) {
  return (
    <div role="table" className={['ds-table', className].filter(Boolean).join(' ')}>
      <TableHeaderRow columns={columns} />
      {children}
    </div>
  );
}
