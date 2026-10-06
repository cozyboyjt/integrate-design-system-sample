import type { ReactNode, SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** Rendered size in px. Icons draw on a 24px grid and scale with this. */
  size?: number;
}

/** Shared 24px line-icon shell. Strokes use currentColor so icons inherit the text colour. */
function createIcon(name: string, paths: ReactNode) {
  const Icon = ({ size = 24, ...props }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths}
    </svg>
  );
  Icon.displayName = name;
  return Icon;
}

export const PlusIcon = createIcon('PlusIcon', <path d="M12 5v14M5 12h14" />);
export const SearchIcon = createIcon(
  'SearchIcon',
  <>
    <circle cx="11" cy="11" r="6" />
    <path d="M16 16l4 4" />
  </>,
);
export const CloseIcon = createIcon('CloseIcon', <path d="M6 6l12 12M18 6L6 18" />);
export const ChevronDownIcon = createIcon('ChevronDownIcon', <path d="M6 9l6 6 6-6" />);
export const ChevronRightIcon = createIcon('ChevronRightIcon', <path d="M9 6l6 6-6 6" />);
export const ArrowRightIcon = createIcon('ArrowRightIcon', <path d="M5 12h14M13 6l6 6-6 6" />);
export const CheckIcon = createIcon('CheckIcon', <path d="M5 12.5l4.5 4.5L19 7.5" />);
export const HashIcon = createIcon('HashIcon', <path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16" />);

export const BellIcon = createIcon(
  'BellIcon',
  <path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15L6 16zM10 21a2 2 0 004 0" />,
);
export const DocumentIcon = createIcon(
  'DocumentIcon',
  <>
    <rect x="6" y="3" width="12" height="18" rx="1.5" />
    <path d="M9.5 9h5M9.5 12h5M9.5 15h5" />
  </>,
);
/** Filled heart — pass `color` via the parent's text colour. */
export const HeartIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
    <path d="M12 20.5s-8-4.9-8-10.6A4.4 4.4 0 018.4 5.5c1.5 0 2.7.7 3.6 2 .9-1.3 2.1-2 3.6-2A4.4 4.4 0 0120 9.9c0 5.7-8 10.6-8 10.6z" />
  </svg>
);
