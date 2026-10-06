import type { ReactNode } from 'react';
import { Chip, type ChipProps } from '../Chip/Chip';
import './Kpi.css';

/* ─── Chart placeholder ─────────────────────────────────── */

/** 220×61 stand-in for the trend chart. Replace it with the real sparkline. */
export function ChartPlaceholder() {
  return <div className="ds-chart-placeholder" aria-hidden="true" />;
}

/* ─── KPI figure ────────────────────────────────────────── */

export interface KpiFigureProps {
  label: string;
  value: string | number;
  /** The delta chip under the value: text and tone (Success, Error or Info). */
  delta?: { text: string; tone: NonNullable<ChipProps['tone']> };
}

export function KpiFigure({ label, value, delta }: KpiFigureProps) {
  return (
    <div className="ds-kpi-figure">
      <span className="ds-kpi-figure__label">{label}</span>
      <span className="ds-kpi-figure__value">{value}</span>
      {delta ? (
        <Chip tone={delta.tone} size="small">
          {delta.text}
        </Chip>
      ) : null}
    </div>
  );
}

/* ─── KPI card ──────────────────────────────────────────── */

export interface KpiCardProps extends KpiFigureProps {
  /** Replace the placeholder with a real chart. */
  chart?: ReactNode;
}

export function KpiCard({ chart, ...figure }: KpiCardProps) {
  return (
    <article className="ds-kpi-card">
      <KpiFigure {...figure} />
      {chart ?? <ChartPlaceholder />}
    </article>
  );
}

/* ─── KPI row ───────────────────────────────────────────── */

export interface KpiRowProps {
  /** KpiCard elements — three across at full width. */
  children: ReactNode;
}

export function KpiRow({ children }: KpiRowProps) {
  return <div className="ds-kpi-row">{children}</div>;
}
