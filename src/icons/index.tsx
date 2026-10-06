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

/** Solid 24px glyph shell for the navigation rail. Fills use currentColor. */
function createSolidIcon(name: string, paths: ReactNode) {
  const Icon = ({ size = 24, ...props }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
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

/* Navigation rail icons (Figma: Nav item / Icon). Outline = default, Filled = active. */
export const HomeIcon = createSolidIcon(
  'HomeIcon',
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.9695 1.89299C11.248 1.62968 11.6167 1.48297 12 1.48297C12.3833 1.48297 12.752 1.62968 13.0305 1.89299L20.2965 8.76149C20.7465 9.18599 21 9.77849 21 10.3965V18.7515C21 19.3482 20.7629 19.9205 20.341 20.3425C19.919 20.7644 19.3467 21.0015 18.75 21.0015H5.25C4.9544 21.0015 4.6617 20.9432 4.38862 20.8301C4.11554 20.7169 3.86743 20.551 3.65848 20.3419C3.44953 20.1329 3.28383 19.8846 3.17084 19.6115C3.05786 19.3383 2.9998 19.0456 3 18.75V10.395C3 9.77699 3.255 9.18449 3.705 8.75998L10.9695 1.89299ZM4.734 9.85198C4.66024 9.92192 4.60146 10.0061 4.56123 10.0995C4.52101 10.1928 4.50017 10.2933 4.5 10.395V18.75C4.5 18.9489 4.57902 19.1397 4.71967 19.2803C4.86032 19.421 5.05109 19.5 5.25 19.5H18.75C18.9489 19.5 19.1397 19.421 19.2803 19.2803C19.421 19.1397 19.5 18.9489 19.5 18.75V10.395C19.5 10.2931 19.4793 10.1923 19.4391 10.0986C19.3988 10.005 19.3399 9.92059 19.266 9.85048L12 2.98199L4.734 9.85198Z"
  />,
);
export const HomeFilledIcon = createSolidIcon(
  'HomeFilledIcon',
  <path d="M10.8017 2.50041C11.1599 2.17824 11.6247 2 12.1065 2C12.5883 2 13.0531 2.17824 13.4113 2.50041L20.5665 8.94001C20.7699 9.12296 20.9326 9.34664 21.044 9.59653C21.1554 9.84643 21.2129 10.117 21.213 10.3905V19.5686C21.213 20.0861 21.0074 20.5825 20.6415 20.9485C20.2755 21.3144 19.7792 21.52 19.2616 21.52H4.95139C4.43385 21.52 3.93751 21.3144 3.57155 20.9485C3.20559 20.5825 3 20.0861 3 19.5686V10.3905C3 9.83765 3.23417 9.31078 3.64656 8.94001L10.8017 2.50041Z" />,
);
export const CoursesIcon = createSolidIcon(
  'CoursesIcon',
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4 4C4 2.89543 4.89543 2 6 2H15.1139C15.6505 2 16.1646 2.21567 16.5407 2.59853L19.4268 5.53691C19.7942 5.9109 20 6.41416 20 6.93838V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM13 4H6V20H18V9H13V4ZM15 4V7H18V6.93838L15.1139 4H15Z"
  />,
);
export const SessionsIcon = createSolidIcon(
  'SessionsIcon',
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2 6C2 3.79077 3.79086 2 6 2H18C20.2091 2 22 3.79077 22 6V20C22 21.1045 21.1046 22 20 22H4C2.89543 22 2 21.1045 2 20V6ZM6 4C4.89543 4 4 4.89551 4 6V8H20V6C20 4.89551 19.1046 4 18 4H17V6H15V4H9V6H7V4H6ZM4 20H20V10H4V20Z"
  />,
);
export const CommunityIcon = createSolidIcon(
  'CommunityIcon',
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.66667 4.63158L13.6667 9L22 2V22H2V10L8.66667 4.63158ZM20 6.29197L13.6411 11.6335L8.61427 7.24161L4 10.9573V13.9665L8.70634 10.3383L13.6879 14.6906L20 9.52612V6.29197ZM4 16.4918V20H20V12.1102L13.6455 17.3094L8.62699 12.9248L4 16.4918Z"
  />,
);
export const CommunityFilledIcon = createSolidIcon(
  'CommunityFilledIcon',
  <>
    <path d="M9 5L2 10V15L9.01976 9.73518L13.9661 13.6922L22 6.55093V2L14 9L9 5Z" />
    <path d="M22 9.22684L14.0339 16.3078L8.98024 12.2648L2 17.5V22H22V9.22684Z" />
  </>,
);
