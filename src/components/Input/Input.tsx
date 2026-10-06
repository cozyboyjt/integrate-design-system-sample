import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Medium is 50px tall; Large is 69px (e.g. the message box). */
  size?: 'medium' | 'large';
  /** Error state (Figma: State=Error). Focus and Disabled come from the DOM states. */
  invalid?: boolean;
  /** Icon before the text (Figma: Leading icon). */
  leadingIcon?: ReactNode;
  /** Icon after the text (Figma: Trailing icon). */
  trailingIcon?: ReactNode;
}

export function Input({
  size = 'medium',
  invalid = false,
  leadingIcon,
  trailingIcon,
  disabled,
  className,
  ...rest
}: InputProps) {
  const classes = [
    'ds-input',
    `ds-input--${size}`,
    invalid ? 'ds-input--invalid' : null,
    disabled ? 'ds-input--disabled' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      {leadingIcon ? <span className="ds-input__icon">{leadingIcon}</span> : null}
      <input className="ds-input__field" disabled={disabled} aria-invalid={invalid || undefined} {...rest} />
      {trailingIcon ? <span className="ds-input__icon">{trailingIcon}</span> : null}
    </div>
  );
}
