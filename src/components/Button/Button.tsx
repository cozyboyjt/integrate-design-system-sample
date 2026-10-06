import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Primary is the one main action on a screen; Secondary is the outlined alternative. */
  variant?: 'primary' | 'secondary';
  size?: 'large' | 'small';
  /** Icon shown before the label (Figma: Left Icon). */
  leftIcon?: ReactNode;
  /** Icon shown after the label (Figma: Right Icon). */
  rightIcon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'large',
  leftIcon,
  rightIcon,
  className,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  const classes = ['ds-button', `ds-button--${variant}`, `ds-button--${size}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <button type={type} className={classes} {...rest}>
      {leftIcon ? <span className="ds-button__icon">{leftIcon}</span> : null}
      <span className="ds-button__label">{children}</span>
      {rightIcon ? <span className="ds-button__icon">{rightIcon}</span> : null}
    </button>
  );
}
