import type { HTMLAttributes } from 'react';
import './InitialsAvatar.css';

export interface InitialsAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Up to two letters. */
  initials: string;
  /** Medium is 40px (message author); Small is 24px (reply quote). */
  size?: 'medium' | 'small';
}

export function InitialsAvatar({ initials, size = 'medium', className, ...rest }: InitialsAvatarProps) {
  return (
    <span
      className={['ds-avatar', `ds-avatar--${size}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {initials}
    </span>
  );
}
