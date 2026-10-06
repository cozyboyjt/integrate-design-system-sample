import type { ButtonHTMLAttributes } from 'react';
import './Tabs.css';

export interface TabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  /** Figma: State=Selected. */
  selected?: boolean;
}

export function Tab({ label, selected = false, className, type = 'button', ...rest }: TabProps) {
  return (
    <button
      type={type}
      role="tab"
      aria-selected={selected}
      className={['ds-tab', selected ? 'ds-tab--selected' : null, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {label}
    </button>
  );
}

export interface TabBarItem {
  id: string;
  label: string;
}

export interface TabBarProps {
  tabs: TabBarItem[];
  /** The id of the selected tab (Figma: Selected). */
  selectedId: string;
  onSelect?: (id: string) => void;
  'aria-label'?: string;
  className?: string;
}

/** A row of tabs above a table, with a divider underneath. */
export function TabBar({ tabs, selectedId, onSelect, className, 'aria-label': ariaLabel }: TabBarProps) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={['ds-tab-bar', className].filter(Boolean).join(' ')}>
      {tabs.map((tab) => (
        <Tab key={tab.id} label={tab.label} selected={tab.id === selectedId} onClick={() => onSelect?.(tab.id)} />
      ))}
    </div>
  );
}
