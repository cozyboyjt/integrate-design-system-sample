import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { DocumentIcon } from '../../icons';
import './Navigation.css';

export interface NavItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  /** Glyph in the 40px icon holder. Defaults to a placeholder document icon (Figma: Icon). */
  icon?: ReactNode;
  /** Figma: State=Active. One active item per rail. */
  active?: boolean;
}

/** One destination in the navigation rail: icon + label. */
export function NavItem({ label, icon, active = false, className, type = 'button', ...rest }: NavItemProps) {
  return (
    <button
      type={type}
      aria-current={active ? 'page' : undefined}
      className={['ds-nav-item', active ? 'ds-nav-item--active' : null, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="ds-nav-item__icon">{icon ?? <DocumentIcon size={24} />}</span>
      <span className="ds-nav-item__label">{label}</span>
    </button>
  );
}

export interface NavbarItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface NavbarProps {
  items: NavbarItem[];
  /** The id of the active item (Figma: Active). */
  activeId: string;
  onSelect?: (id: string) => void;
  className?: string;
}

/** The left navigation rail. Stretch it to the full height of the screen. */
export function Navbar({ items, activeId, onSelect, className }: NavbarProps) {
  return (
    <nav aria-label="Main" className={['ds-navbar', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          icon={item.icon}
          active={item.id === activeId}
          onClick={() => onSelect?.(item.id)}
        />
      ))}
    </nav>
  );
}
