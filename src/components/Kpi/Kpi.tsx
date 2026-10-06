import type { ReactNode } from 'react';
import { Chip, type ChipProps } from '../Chip/Chip';
import trendUp from './trends/up.png';
import trendDown from './trends/down.png';
import trendNeutral from './trends/neutral.png';
import './Kpi.css';

/* ─── Sparkline ─────────────────────────────────────────── */

export type Trend = 'up' | 'down' | 'neutral';

const TREND_SRC: Record<Trend, string> = {
  up: trendUp,
  down: trendDown,
  neutral: trendNeutral,
};

export interface SparklineProps {
  /** Which sparkline is showing. Independent of the delta chip's tone. */
  trend?: Trend;
}

/** 220×61 trend chart for a KPI card. Swap the trend to change which curve shows. */
export function Sparkline({ trend = 'up' }: SparklineProps) {
  return <img className="ds-sparkline" src={TREND_SRC[trend]} alt="" aria-hidden="true" />;
}

/* ─── Chart placeholder ─────────────────────────────────── */

/** 220×61 flat stand-in for a chart, for cards with no trend data yet. */
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
  /** Which sparkline shows on the right: Up, Down or Neutral. Not tied to the delta chip. */
  trend?: Trend;
  /** Replace the sparkline with a real chart. */
  chart?: ReactNode;
}

export function KpiCard({ chart, trend = 'up', ...figure }: KpiCardProps) {
  return (
    <article className="ds-kpi-card">
      <KpiFigure {...figure} />
      {chart ?? <Sparkline trend={trend} />}
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
