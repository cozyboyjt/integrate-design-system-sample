import type { ReactNode } from 'react';
import { ChevronDownIcon } from '../../icons';
import { Button } from '../Button/Button';
import './SectionHeader.css';

export interface SectionHeaderProps {
  title: string;
  /** Heading level for the title. Defaults to h2 (one below the page's h1). */
  headingLevel?: 2 | 3 | 4;
  subtitle?: string;
  /** Shows the Filter button (Figma: Show filter). Ignored when `action` is set. */
  onFilter?: () => void;
  /** Replace the default Filter button with your own control. */
  action?: ReactNode;
}

/** Top of a table card: title and subtitle on the left, one action on the right. */
export function SectionHeader({ title, headingLevel = 2, subtitle, onFilter, action }: SectionHeaderProps) {
  const Heading = `h${headingLevel}` as const;
  return (
    <div className="ds-section-header">
      <div className="ds-section-header__titles">
        <Heading className="ds-section-header__title">{title}</Heading>
        {subtitle ? <p className="ds-section-header__subtitle">{subtitle}</p> : null}
      </div>
      {action ??
        (onFilter ? (
          <Button variant="secondary" size="small" rightIcon={<ChevronDownIcon />} onClick={onFilter}>
            Filter
          </Button>
        ) : null)}
    </div>
  );
}
