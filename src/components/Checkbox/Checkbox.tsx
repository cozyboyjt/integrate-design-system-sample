import type { InputHTMLAttributes } from 'react';
import { CheckIcon } from '../../icons';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Accessible name when there is no visible label. */
  'aria-label'?: string;
}

/** Binary selection control (Figma: State=Unchecked | Checked). Use a radio for exclusive options. */
export function Checkbox({ className, ...rest }: CheckboxProps) {
  return (
    <span className={['ds-checkbox', className].filter(Boolean).join(' ')}>
      <input className="ds-checkbox__input" type="checkbox" {...rest} />
      <span className="ds-checkbox__box" aria-hidden="true">
        <CheckIcon size={12} strokeWidth={2.5} />
      </span>
    </span>
  );
}
