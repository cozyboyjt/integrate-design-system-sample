import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRightIcon } from '../../icons';
import './SendButton.css';

export interface SendButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Glyph on the button (Figma: Icon). The arrow is a stand-in for the real send icon. */
  icon?: ReactNode;
}

/** Square send control that sits beside a Large Input. 73×69. */
export function SendButton({ icon, className, type = 'button', 'aria-label': ariaLabel = 'Send', ...rest }: SendButtonProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={['ds-send-button', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {icon ?? <ArrowRightIcon size={24} />}
    </button>
  );
}
