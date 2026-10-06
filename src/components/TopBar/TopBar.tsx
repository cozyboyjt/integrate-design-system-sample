import type { ReactNode } from 'react';
import { BellIcon } from '../../icons';
import { InitialsAvatar } from '../InitialsAvatar/InitialsAvatar';
import './TopBar.css';

export interface TopBarProps {
  /** Product logo, shown on the left. */
  logo: ReactNode;
  userName: string;
  userRole?: string;
  /** Photo for the signed-in user; falls back to initials. */
  avatarSrc?: string;
  /** Unread notification count (Figma: Count / Show badge). Hidden when 0 or undefined. */
  notificationCount?: number;
  className?: string;
}

function initialsOf(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

/** Application top bar. Spans the full screen width above the Navbar and content. */
export function TopBar({ logo, userName, userRole, avatarSrc, notificationCount, className }: TopBarProps) {
  return (
    <header className={['ds-topbar', className].filter(Boolean).join(' ')}>
      <div className="ds-topbar__logo">{logo}</div>
      <div className="ds-topbar__right">
        <div
          className="ds-topbar__bell"
          role="img"
          aria-label={notificationCount ? `${notificationCount} unread notifications` : 'Notifications'}
        >
          <BellIcon size={32} fill="currentColor" strokeWidth={0} />
          {notificationCount ? <span className="ds-topbar__badge">{notificationCount}</span> : null}
        </div>
        <div className="ds-topbar__user">
          {avatarSrc ? (
            <img className="ds-topbar__photo" src={avatarSrc} alt="" />
          ) : (
            <InitialsAvatar initials={initialsOf(userName)} className="ds-topbar__photo" />
          )}
          <div className="ds-topbar__who">
            <span className="ds-topbar__name">{userName}</span>
            {userRole ? <span className="ds-topbar__role">{userRole}</span> : null}
          </div>
        </div>
      </div>
    </header>
  );
}
