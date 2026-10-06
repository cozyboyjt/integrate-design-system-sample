import './SegmentedControl.css';

export interface SegmentedOption {
  value: string;
  label: string;
}

export interface SegmentedControlProps {
  /** Exactly two options (Figma: Selected=First | Second). */
  options: [SegmentedOption, SegmentedOption];
  value: string;
  onChange?: (value: string) => void;
  /** Accessible name for the group. */
  'aria-label'?: string;
  className?: string;
}

/** Two joined pills that switch between peer views of the same screen, e.g. # Channels / # DMs. */
export function SegmentedControl({
  options,
  value,
  onChange,
  className,
  'aria-label': ariaLabel,
}: SegmentedControlProps) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={['ds-segmented', className].filter(Boolean).join(' ')}
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={['ds-segmented__pill', selected ? 'ds-segmented__pill--selected' : null]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onChange?.(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
