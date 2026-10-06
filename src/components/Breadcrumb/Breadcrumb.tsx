import { Fragment } from 'react';
import { ChevronRightIcon } from '../../icons';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  /** Omit on the last (current) step. */
  href?: string;
}

export interface BreadcrumbProps {
  /** Two or three steps; the last is the current page (Figma: Levels). */
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={['ds-breadcrumb', className].filter(Boolean).join(' ')}>
      <ol className="ds-breadcrumb__list">
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <Fragment key={`${item.label}-${index}`}>
              <li className="ds-breadcrumb__item">
                {current || !item.href ? (
                  <span
                    className={current ? 'ds-breadcrumb__current' : 'ds-breadcrumb__step'}
                    aria-current={current ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <a className="ds-breadcrumb__step" href={item.href}>
                    {item.label}
                  </a>
                )}
              </li>
              {!current && (
                <li className="ds-breadcrumb__separator" aria-hidden="true">
                  <ChevronRightIcon size={16} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
