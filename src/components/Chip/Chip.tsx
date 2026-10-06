import type { HTMLAttributes, ReactNode } from 'react';
import './Chip.css';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Colour by meaning (Figma: State). */
  tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info';
  /** Figma: Property 1. */
  size?: 'small' | 'large';
  children: ReactNode;
}

/** A compact, non-interactive label for status, categories and deltas. */
export function Chip({ tone = 'neutral', size = 'small', className, children, ...rest }: ChipProps) {
  const classes = ['ds-chip', `ds-chip--${tone}`, `ds-chip--${size}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
