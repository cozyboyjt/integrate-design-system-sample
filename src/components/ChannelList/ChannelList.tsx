import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ChevronDownIcon, HashIcon, PlusIcon } from '../../icons';
import './ChannelList.css';

/* ─── Channel row ───────────────────────────────────────── */

export interface ChannelRowProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Channel name, without the # glyph. */
  label: string;
  /** Figma: State=Selected. One selected row across the whole list. */
  selected?: boolean;
  /** Unread count (Figma: Show badge + Count). Hidden when undefined or 0. */
  unread?: number;
}

export function ChannelRow({ label, selected = false, unread, className, type = 'button', ...rest }: ChannelRowProps) {
  return (
    <button
      type={type}
      aria-current={selected ? 'true' : undefined}
      className={['ds-channel-row', selected ? 'ds-channel-row--selected' : null, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <HashIcon size={16} className="ds-channel-row__hash" />
      <span className="ds-channel-row__label">{label}</span>
      {unread ? <span className="ds-channel-row__badge">{unread}</span> : null}
    </button>
  );
}

/* ─── Group header ──────────────────────────────────────── */

export interface GroupHeaderProps {
  label: string;
  /** Figma: State=Expanded | Collapsed. */
  expanded?: boolean;
  onToggle?: () => void;
  /** Shows the + button (Figma: Show add). */
  onAdd?: () => void;
}

export function GroupHeader({ label, expanded = true, onToggle, onAdd }: GroupHeaderProps) {
  return (
    <div className="ds-group-header">
      <button
        type="button"
        className="ds-group-header__toggle"
        aria-expanded={expanded}
        onClick={onToggle}
      >
        <ChevronDownIcon
          size={12}
          className={['ds-group-header__chevron', expanded ? null : 'ds-group-header__chevron--collapsed']
            .filter(Boolean)
            .join(' ')}
        />
        <span className="ds-group-header__label">{label}</span>
      </button>
      {onAdd ? (
        <button type="button" className="ds-group-header__add" aria-label={`Add to ${label}`} onClick={onAdd}>
          <PlusIcon size={16} />
        </button>
      ) : null}
    </div>
  );
}

/* ─── Channel group (accordion) ─────────────────────────── */

export interface ChannelGroupProps {
  label: string;
  /** Figma: Open=True | False. Open is the single control; the header follows it. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onAdd?: () => void;
  /** Channel rows. Use as many as you need. */
  children?: ReactNode;
}

export function ChannelGroup({ label, open = true, onOpenChange, onAdd, children }: ChannelGroupProps) {
  return (
    <section className="ds-channel-group">
      <GroupHeader label={label} expanded={open} onToggle={() => onOpenChange?.(!open)} onAdd={onAdd} />
      {open ? <div className="ds-channel-group__rows">{children}</div> : null}
    </section>
  );
}
