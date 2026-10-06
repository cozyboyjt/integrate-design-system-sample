import type { HTMLAttributes } from 'react';
import './YouBadge.css';

export interface YouBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge text; keep to one short word. */
  label?: string;
}

/** Marks a message as the signed-in user's own. */
export function YouBadge({ label = 'You', className, ...rest }: YouBadgeProps) {
  return (
    <span className={['ds-you-badge', className].filter(Boolean).join(' ')} {...rest}>
      {label}
    </span>
  );
}
